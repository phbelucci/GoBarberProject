import 'reflect-metadata';
import cors from 'cors';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';
import uploadConfig from './config/upload';

import AppError from './errors/AppError';

import './database';


const app = express()

//cors utilizado somente para requisições feitas atraves de um browser ou app web
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err : Error, req: Request, res: Response, _: NextFunction) => {
  if(err instanceof AppError){
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal sever Error.'
  })

})

const port = 3333
app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})
