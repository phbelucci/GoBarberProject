import React, {useCallback, useRef} from 'react';
import { FiArrowLeft,FiMail, FiLock, FiUser } from 'react-icons/fi';
import {Container,Content,Background } from './styles';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationsError from '../../utils/getValidationsError'

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { Form } from '@unform/web'

import logoGoBarber from '../../assets/logo.svg'

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data : object) => {

    try {
      formRef.current?.setErrors({});

      //validar um objeto, podemos criar um squema de validação
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        email: Yup.string().required('E-mail obrigatório.').email('Digite um e-mail válido!'),
        password: Yup.string().min(6, 'A senha deve ter no minimo 6 digitos.')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

    } catch (err) {

      const errors = getValidationsError(err);
      formRef.current?.setErrors(errors);

    }
  }, []);

  return (
  <Container>

    <Background>

    </Background>
    <Content>
      <img src={logoGoBarber} alt="GoBarber"></img>

      <Form
        ref={formRef}
        onSubmit={handleSubmit} >
        <h1>Faça seu Cadastro</h1>

        <Input
          name="name"
          type="text"
          placeholder="Nome"
          icon={FiUser}
        />
        <Input
          name="email"
          type="text"
          placeholder="Email"
          icon={FiMail}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button type="submit">Cadastrar</Button>

      </Form>
      <a href="ok">
        <FiArrowLeft/>
        Voltar para Logon
      </a>
    </Content>

  </Container>)
};

export default SignUp;
