import { request, response } from 'express';
import Users from "../models/user.js";
import jwt from 'jsonwebtoken';


const validateJWT = async(req = request, res = response, netx) => {
    const token = req.header('x-token');

    if(!token) {
        return res.status(401).json({
        msg: 'We couldn\'t found a token'
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const user = await Users.findById(uid);

        //Verify user exists
        if(!user) {
            return res.status(401).json({
                msg: 'Not a valid token - Not an existing user'
            })
        }

        //Verify uid state is on true
        if(!user.state) {
            return res.status(401).json({
                msg: 'Not a valid token - User with false state'
            })
        }

        req.user = user;
        netx()
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Not a valid token'
        })
    }
}

export {
    validateJWT
}