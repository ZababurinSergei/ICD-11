import axios from "axios";
import isEmpty from './modules/isEmpty/isEmpty.mjs'

const config = {
    headers: {
        "accept": "application/json",
        "API-Version": "v2",
        "Accept-Language": "en"
    }
};

const location = {
    protocol:'http',
    host: '127.0.0.1',
    hostname: '127.0.0.1',
    port: '3333'
}

const transformUrl = (url) => {
    let result = new URL(url)
    result.pathname = `/v1${result.pathname}`
    result = Object.assign(result, location)
    return result
}

const childRequest = async (endpoints) => {
    return await Promise.allSettled(endpoints.map((endpoint) => axios.get(typeof endpoint === 'object' ? endpoint.href : endpoint, config))).then(
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
        RootConcepts: childRequest,
        ChildrenConcepts: childRequest
    }
}

const getChapter = () => {
   return axios.get(`http://127.0.0.1:3333/v1/icd/release/11/2020-09/mms`, config)
        .then(async (response) => {
            let endpoints = response.data.child.map(item => API.url.transform(item))
            const data = await API.get.RootConcepts(endpoints)
            const result = data.map((item, index) => {
                return [[{
                    id: API.url.transform(item[`@id`]).href,
                    classKind: item.classKind,
                    code: item.code,
                    title: item.title['@value'],
                    child: item.child.map(item => API.url.transform(item).href)
                }]]
            })
            return result
        })
        .catch(e => {
            console.log('ERROR', e)
        })
}

const getChildren = async (block) => {
    const result = []
    for(let type of block) {
        const chapter = []
        for(let value of type) {
            for(let item of value) {
                if(!isEmpty(item.child)) {
                    const data = await API.get.ChildrenConcepts(item.child)
                    const child = data.map(item => {
                        return {
                            id: API.url.transform(item[`@id`]).href,
                            classKind: item.classKind,
                            parent: item.parent.map(item => API.url.transform(item).href ),
                            code: item.code,
                            title: item.title['@value'],
                            child: item.child ? item.child.map(item => API.url.transform(item).href ) : undefined
                        }
                    })
                    chapter.push(child)
                }
            }
        }
        result.push(chapter)
    }
    return result
}

const chapter = await getChapter()
const child_1 = await getChildren(chapter)
const child_2 = await getChildren(child_1)
const child_3 = await getChildren(child_2)
const child_4 = await getChildren(child_3)
// console.log('===1===', child_1[27][0][4])
console.log('===2===', child_3)
