import {ValidationError} from 'yup';

interface Errors {
  //a linha abaixo mostra que indepedente do nome do campo que vier... ele precisa ser uma string
  //o nome key é apenas para padronização... mas pode ser qq nome
  [key: string]: string,

}
  export default function getValidationError(err : ValidationError) : Errors {

    const validationErrors: Errors = { };

    err.inner.forEach(error => {
      validationErrors[error.path] = error.message;

    })
    return validationErrors;
}
