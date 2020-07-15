import {Router, Request} from 'express'
import CreateUserService from '../services/CreateUserService'
import ensureAuth from '../midlewares/ensureAuth'
import multer from 'multer'
import uploadConfig from '../config/upload'
import UpdateUserAvatarService from '../services/UpdateUserAvatarService'



const usersRouter = Router();
const upload = multer(uploadConfig);


usersRouter.post('/', async (req, res) => {
  

    const {name, email, password} = req.body;

    const createUser = new CreateUserService()

    const user = await createUser.execute({
        name,
        email,
        password
    })

    delete user.password

    return res.json(user)

})

usersRouter.patch(
    '/avatar',
    ensureAuth,
    upload.single('avatar'),
    async (req,res) => {

        const UpdateUserAvatar = new UpdateUserAvatarService();
        console.log(req.user.id)
        
        const user = await UpdateUserAvatar.execute({
            user_id: req.user.id,
            avatarFilename: req.file.filename,
        })
        
        delete user.password;

        res.status(200).json(user)
        

    }
)

export default usersRouter;