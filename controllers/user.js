import { request, response } from "express"

const userGet = (req = request, res = response) => {
    const {q, name, apike} = req.query;
    res.json({
        msg: 'Hello World - get resquest',
        query
    })
}

const userPut = (req = request, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'Hello World - post request',
        id
    })
}

const userPost = (req = request, res = response) => {
    const {name, age} = req.body;
    res.json({
        msg: 'Hello World - post request',
        name, 
        age
    })
}

const userDelete = (req, res) => {
    res.json('Hello World - delete request ')
}

export {
    userGet,
    userPut,
    userPost,
    userDelete

}