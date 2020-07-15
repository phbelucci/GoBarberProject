import {Router, json} from 'express'
import appointmentsRouter from './appointments.routes'
import usersRouter from './users.routes'
import sessionRouter from './sessions.routes.'

const routes  = Router()
routes.use(json())

//usado para direcionar as rotas para o appointmentsRouter
routes.use('/appointments', appointmentsRouter)
routes.use('/users', usersRouter)
routes.use('/sessions', sessionRouter)

export default routes