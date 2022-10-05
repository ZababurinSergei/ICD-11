import axios from "axios";

const config = {
    headers: {
        "accept": "application/json",
        "API-Version": "v2",
        "Accept-Language": "en"
    }
};

const location = {
    protocol:'http',
    host: '127.0.0.1:3333',
    hostname: '127.0.0.1:3333',
    port: '3333'
}

const transformUrl = (url) => {
    let result = new URL(url)
    result.pathname = `/v1${result.pathname}`
    result = Object.assign(result, location)
    return result
}

const RootConcepts = async (endpoints) => {
    return await Promise.allSettled(endpoints.map((endpoint) => axios.get(endpoint.href, config))).then(
        axios.spread((...allData) => {
            return allData.map(item => item.value.data)
        })
    );
}

const API = {
    url: {
        transform: transformUrl,
    },
    get: {
        RootConcepts: RootConcepts
    }
}

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

let endpoints = [ ];

axios.get(`http://127.0.0.1:3333/v1/icd/release/11/2020-09/mms`, config)
    .then(async (response) => {
        let endpoints = response.data.child.map(item => API.url.transform(item))
        const data = await API.get.RootConcepts(endpoints)
        const result = data.map(item => {
            console.log('item', item)
            return {
                ID: API.url.transform(item[`@id`]).href,
                classKind: item.classKind,
                code: item.code
            }
        })
        console.log('result', result)
        return data
    })
    .catch(e => {
        console.log('ERROR', e)
    })


// Suggested = null
// ID = "http://id.who.int/icd/entity/1766440644"
// html = "\r\n<a \r\n class="ygtvlabel " \r\n \r\n data-id="http://id.who.int/icd/entity/1766440644">\r\n\r\n \r\n\r\n\r\n <span class="icode ">03</span>\r\nDiseases of the blood or blood-forming organs\r\n\r\n\r\n\r\n</a>&nbsp;\r\n\r\n"
//     isLeaf = false
// classKind = "chapter"
// isAdoptedChild = false
// averageDepth = 0