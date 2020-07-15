import {Router} from 'express'
import AutheticateUserService from '../services/AuthenticateUserService'
import {getCustomRepository} from 'typeorm'

const sesssionsRouter = Router()

sesssionsRouter.post('/', async (req, res) => {
   
    const {email , password} = req.body;

    const autenticateUser = new AutheticateUserService();     

    const { user,token} = await autenticateUser.execute({
        email, 
        password
    })

    delete user.password

    return res.json({user, token})

   
})

export default sesssionsRouter;