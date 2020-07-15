import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import {getCustomRepository} from 'typeorm'
import { startOfHour } from 'date-fns/fp'

import AppError from '../errors/AppError'



interface Request {
  date : Date
  provider_id: string
}

class CreateAppointmentService {

  public async execute({provider_id, date} : Request) : Promise<Appointment> {

    const appointmentsRepository = getCustomRepository(AppointmentsRepository)

    const appointmentDate = startOfHour(date)

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate)

    if(findAppointmentInSameDate){
      throw new AppError("This appointment is already booked.", 400)
    }

    const appointment = appointmentsRepository.create({
      provider_id, date: appointmentDate
    })

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
