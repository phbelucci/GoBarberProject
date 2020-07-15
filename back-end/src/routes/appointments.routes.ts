import {Router} from 'express'
import {parseISO} from 'date-fns'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'

import ensureAuth from '../midlewares/ensureAuth'

import {getCustomRepository} from 'typeorm'
//parseISO vai converter uma string para um formato de Date, nativo do javascript
//startOfHour pega a data e coloca no começo da hora informada, zerando todos os outros atributos, minutos segundos e etc

const appointmentsRouter  = Router()
appointmentsRouter.use(ensureAuth)

//SoC: Separation of Concerns
//DTO = Data Transfer Object
//Rota: Receber a requisição, chamar um outro arquivo, devolver resposta

appointmentsRouter.get('/', async (req, res) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const allAppointments = await appointmentsRepository.find();
  return res.json(allAppointments)
})

appointmentsRouter.post('/', async (req, res) => {
 
      const {provider_id, date} = req.body

      const parsedDate = parseISO(date)

      const creatAppointment = new CreateAppointmentService();

      const appointment = await creatAppointment.execute({provider_id, date : parsedDate})
      return res.json(appointment)

  
})

export default appointmentsRouter
