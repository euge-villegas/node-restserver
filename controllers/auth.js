import { request, response } from "express";
import Users from "../models/user.js";
import bcrypt from "bcryptjs";
import { generateJWT } from "../helpers/generateJWT.js";

const login = async(req = request, res = response) => {

    const {mail, password} = req.body;

    try {

        //Verify if email exists
        const user = await Users.findOne({mail});

        if (!user) {
            return res.status(400).json({
                msg: 'User or password might be wrong'
            })
        }

        //Verify user's state
        if (!user.state) {
            return res.status(400).json({
                msg: 'User or password might be wrong - state false'
            })
        }

        //Verify password
        const validPass = bcrypt.compareSync( password, user.password );
        if (!validPass) {
            return res.status(400).json({
                msg: 'User or password might be wrong - wrong password'
            })
        }

        //Generate json web token
        const token = await generateJWT(user.id)

        res.json({
            user,
            token
        })
    } catch (error) {
        
    }

    
}

export {
    login
}