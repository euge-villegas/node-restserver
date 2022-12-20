import { Router } from "express";
import { check } from "express-validator";

import { login } from "../controllers/auth.js";
import { validateCamps } from "../middlewares/campsValidations.js";


export const auth = Router();

auth.post('/login', [
    check('mail', 'Email is mandatory').isEmail(),
    check('password', 'Password is mandatory').not().isEmpty(),
    validateCamps
], login);

export {
    Router
}