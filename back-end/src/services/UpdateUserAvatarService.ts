import path from 'path'
import {getRepository} from 'typeorm'
import User from '../models/Users'
import uploadConfig from '../config/upload'
import fs from 'fs'

import AppError from '../errors/AppError'

interface Request {
    user_id: string;
    avatarFilename: string;
}

class UpdateUserAvatarService {
    
    public async execute({user_id, avatarFilename}: Request): Promise<User>{
        //adiciona repositorio usando o model como parametro
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne(user_id);

        if(!user) {
            throw new AppError('Only authenticated users.', 401);
        }

        if(user.avatar){
            //deletar avatar anterior
            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
            //stat traz o status do arquivo somente se ele existir
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

            if(userAvatarFileExists){
                //unlink deleta o arquivo se ele existir
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFilename;

        await usersRepository.save(user);

        return user;

    }

}

export default UpdateUserAvatarService;