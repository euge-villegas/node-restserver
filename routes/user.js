import { Router } from "express";
import { userDelete, userGet, userPost, userPut } from "../controllers/user.js";

export const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/', userDelete);

export {
    Router
}