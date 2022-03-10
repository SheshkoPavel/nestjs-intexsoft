import {JwtPayload} from "../models/jwt.payload";
import {Request} from "express";
import atob = require('atob');

export const getUserId = (req: Request) => {
    const decodedJwtPayload = req.headers.authorization.split('.')[1];

    const jwtPayload: JwtPayload = JSON.parse(atob(decodedJwtPayload));
    return  Number(jwtPayload.id);

}
