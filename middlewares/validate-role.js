import { request, response } from "express";


const isAdminRole = (req = request, res = response, next) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'You need to validate token to be able to validate role'
        })
    }

    const {role, name} = req.user;

    if (role !== 'ADMIN_ROLE') {
        return res.status(400).json({
            msg: `${name} is not an administrator`
        });
    }
    next()
}

const hasRole = (...roles) => {
    return (req, res = response, next) => {
        console.log(roles);
        next()
    }
}

export {
    isAdminRole,
    hasRole
}