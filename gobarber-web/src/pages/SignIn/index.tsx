import React, {useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'

import getValidationsError from '../../utils/getValidationsError';
import {Container,Content,Background } from './styles';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import logoGoBarber from '../../assets/logo.svg';

interface SignInFormData {
  email: string,
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(

    async (data : SignInFormData) => {

    try {
      formRef.current?.setErrors({});

      //validar um objeto, podemos criar um squema de validação
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório.').email('Digite um e-mail válido!'),
        password: Yup.string().required('A senha é obrigatória.')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      })

    } catch (err) {

      if(err instanceof Yup.ValidationError){
        const errors = getValidationsError(err);
        formRef.current?.setErrors(errors);
      }

      //disparar um toast
      addToast({
        type: 'success',
        title: 'erro auth',
        description: 'occorreu erro'
      });

    }
  }, [signIn, addToast]);

  return (

    <Container>
      <Content>
        <img src={logoGoBarber} alt="GoBarber"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
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
          <Button type='submit'>Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>

        </Form>
        <a href="ok">
          <FiLogIn/>
          Criar conta
        </a>
      </Content>
      <Background>

      </Background>
    </Container>
  );

}



export default SignIn;
