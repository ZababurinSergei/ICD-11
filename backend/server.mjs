import express from 'express';
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";
import corsOptions from './config/cors/index.mjs';
import shouldCompress from './config/compression/index.mjs';
import * as dotenv from 'dotenv';
import memorystore from './model.mjs';
import OAuthServer from "express-oauth-server";
import axios from "axios";
import EventEmitter from "events";
import isEmpty from './modules/isEmpty/isEmpty.mjs'

const Stream = new EventEmitter();

dotenv.config();

let app = express();

const config = {
    headers: {
        "accept": "application/json",
        "API-Version": "v2",
        "Accept-Language": "en",
        "Authorization": `Bearer ${process.env.token}`
    }
};

const getEntity = (entity) => {
    return axios.get(`${entity}?releaseId=2022-02`, config)
        .then((response) => {

            console.log(entity, '@@@@@@@@@@@@@💚@@@💚@@@@@@@@@@@@@', response.data)
            return response.data
        })
        .catch(e => {
            console.log('ERROR', e)
            return {
                error: e,
                status: false
            }
        })
}

const GetPostCoordination = (request) => {
    return new Promise(async (resolve, reject) => {
        const temp = {
            ConceptId: request.ConceptId,
            data: JSON.parse(request.data)
        }

        const ConceptId = await getEntity(temp.ConceptId)

        Stream.emit("push", "message", {
            type: 'ConceptId',
            msg: ConceptId
        });

        const stemId = await getEntity(temp.data.postcoordinationCodeSet.stemId)

        Stream.emit("push", "message", {
            type: 'stemId',
            msg: stemId
        });
        let axis = []
        for(let type in temp.data.postcoordinationCodeSet.axisToValueIds) {
            for(let key in temp.data.postcoordinationCodeSet.axisToValueIds[type]) {
                let axisToValue = await getEntity(temp.data.postcoordinationCodeSet.axisToValueIds[type][key].stemId)
                let axisRoot = await getEntity(axisToValue[`@id`])
                axis.push({
                    concept: axisToValue,
                    '@id': axisRoot
                })
            }
        }

        Stream.emit("push", "message", {
            type: 'axisToValue',
            msg: axis
        });

        resolve()
    })
}

app.options('/stream', cors(corsOptions))
app.get('/stream', cors(corsOptions), async function(req, res) {
    console.log('############## STREAM ##############')
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    res.flushHeaders();
    res.write('retry: 10000\n\n');
    Stream.on("push", function(event, data) {
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    });
});

app.use((req, res, next) => {
        console.log(`ICD-11-${req.method}: ${req.path}`);
    next();
});

app.use(await express.json());
app.use(await compression({ filter: shouldCompress }));
app.use(await cors({ credentials: true }));

const queue = new Enqueue({
    concurrentWorkers: 4,
    maxSize: 200,
    timeout: 30000
});

app.options('/browse11/l-m/en/GetUpdatedPostCoordinationData', cors(corsOptions))
app.post('/browse11/l-m/en/GetUpdatedPostCoordinationData', (req, res) => {
    let query = req.query
    query.data = JSON.parse(req.query.data)
    console.log('🌐[(POST)UpdatedPostCoordinationData]', query)

    axios.post(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            console.log('🌐🌐[(POST)UpdatedPostCoordinationData]', JSON.parse(response.data))
            Stream.emit("push", "message", {
                type: 'UpdatedPostCoordinationData',
                msg: response.data
            });
            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})

app.options('/browse11/l-m/en/JsonGetChildrenConcepts', cors(corsOptions))
app.post('/browse11/l-m/en/JsonGetChildrenConcepts', async (req, res) => {
    let query = req.query
    // query.data = JSON.parse(req.query.data)
    console.log('🌐[(POST)GetChildrenConcepts]', req.query)
    axios.post(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            console.log('🌐🌐[(POST)GetChildrenConcepts]', response.data)
            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})

app.options('/browse11/l-m/en/ACSearch', cors(corsOptions))
app.post('/browse11/l-m/en/ACSearch', async (req, res) => {
    let query = req.query
    console.log('🏩[(POST)ACSearch]', req.originalUrl)
    axios.post(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            console.log('🏩🏩[(POST)ACSearch]', response.data)
            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})

app.options('/browse11/l-m/en/GetConcept', cors(corsOptions))
app.get('/browse11/l-m/en/GetConcept', async (req, res) => {
    console.log('🥎[(GET)GetConcept]', req.query)
    axios.get(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            // console.log('🥎🥎[(GET)GetConcept]', response.data)
            res.send(response.data)
            Stream.emit("push", "message", {
                type: 'GetConcept',
                msg: response.data
            });
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})

app.options('/browse11/l-m/en/JsonGetParentConceptIDsToRoot', cors(corsOptions))
app.get('/browse11/l-m/en/JsonGetParentConceptIDsToRoot', async (req, res) => {
    console.log('🥎[(GET)ParentConcept]', req.query)
    axios.get(`https://icd.who.int${req.originalUrl}`, config)
        .then(async (response) => {
            // console.log('🥎🥎[(GET)ParentConcept]', response.data)
            Stream.emit("push", "message", {
                type: 'GetParentConcept',
                msg: response.data
            });

            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})

app.options('/browse11/l-m/en/JsonGetRootConcepts', cors(corsOptions))
app.get('/browse11/l-m/en/JsonGetRootConcepts', async (req, res) => {
    console.log('🥎[(GET)RootConcepts]', req.query)
    axios.get(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            // console.log('🥎🥎[(GET)RootConcepts]', response.data)
            Stream.emit("push", "message", {
                type: 'GetRootConcepts',
                msg: response.data
            });

            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})


app.options('/browse11/l-m/en/JsonGetChildrenConcepts', cors(corsOptions))
app.get('/browse11/l-m/en/JsonGetChildrenConcepts', async (req, res) => {
    console.log('🥎[(GET)ChildrenConcepts]', req.query)
    req.query.useHtml = false
    axios.get(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            // console.log('🥎🥎[(GET)ChildrenConcepts]', response.data)
            Stream.emit("push", "message", {
                type: 'GetChildrenConcepts',
                msg: response.data
            });
            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})


app.options('/browse11/l-m/en/GetPostCoordination', cors(corsOptions))
app.get('/browse11/l-m/en/GetPostCoordination', async (req, res) => {
    console.log('🥎[(GET)GetPostCoordination]', req.query)

    const result2 = await GetPostCoordination(req.query);

    console.log('🤎 data', result2)

    axios.get(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            // console.log('🥎🥎[(GET)GetPostCoordination]', response.data)
            Stream.emit("push", "message", {
                type: 'GetPostCoordination',
                msg: response.data
            });
            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})

app.options('/browse11/l-m/en/JsonGetPCAxisRoot', cors(corsOptions))
app.get('/browse11/l-m/en/JsonGetPCAxisRoot', async (req, res) => {
    console.log('🥎[(GET)JsonGetPCAxisRoot]', req.query)
    axios.get(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            console.log('🥎🥎[(GET)JsonGetPCAxisRoot]', response.data)
            Stream.emit("push", "message", {
                type: 'JsonGetPCAxisRoot',
                msg: response.data
            });
            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})

//////////////////////////

app.options('/browse11/*', cors(corsOptions))
app.get('/browse11/*', async (req, res) => {
    console.log('💥[(GET)a]', req.path)
    axios.get(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            console.log('💥💥[(GET)a]', response.data)
            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})

app.options('/browse11/*', cors(corsOptions))
app.post('/browse11/*', async (req, res) => {
    console.log('💥💥[(A)a]', req)
    axios.post(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            // console.log('== response ==', response.data)
            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
})

app.use(queue.getMiddleware());
app.options(await cors(corsOptions))

app.use(queue.getErrorMiddleware())

export default app
