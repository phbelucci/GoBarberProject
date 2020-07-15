import { getRepository } from "typeorm";
import {compare} from 'bcryptjs'
import  {sign} from 'jsonwebtoken'
import User from '../models/Users'

import AppError from '../errors/AppError'

import authConfig from '../config/auth'

interface Request {
    email: string;
    password: string;

}

interface Response {
    user: User;
    token: string;
}
 

class AutheticateUserService {
    public async execute({email, password} : Request): Promise<Response> {

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({
            where: {email}
        })

        if(!user){
            throw new AppError("Incorret email/password combination.");
        }

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched){
            throw new AppError("Incorret email/password combination.", 401);
        }

        const {secret, expiresIn } = authConfig.jwt 
        //primeiro parametro payload - não seguro
        //segudno parametro secret key
        const token = sign({ }, secret, {
            subject: user.id,
            //estudar depois refresh token
            expiresIn,
        })

        return ({
            user,
            token
        })

    }
}

export default AutheticateUserService;