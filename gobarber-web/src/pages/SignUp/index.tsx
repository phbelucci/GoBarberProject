import React, {useCallback, useRef} from 'react';
import { FiArrowLeft,FiMail, FiLock, FiUser } from 'react-icons/fi';
import {Container,Content,Background,AnimationContainer } from './styles';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import {useToast} from '../../hooks/toast'


import getValidationsError from '../../utils/getValidationsError'

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { Form } from '@unform/web'

import logoGoBarber from '../../assets/logo.svg'

interface SignUpFormData {
  name: string;
  email: string;
  password: string;

}

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(async (data : SignUpFormData) => {

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

      await api.post('/users', data);

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro Realizado.',
        description: 'Você já pode se logar no GoBarber.'
      })

    } catch (err) {

      if(err instanceof Yup.ValidationError){
        const errors = getValidationsError(err);
        formRef.current?.setErrors(errors);

        return;
      }

      //disparar um toast
      addToast({
        type: 'success',
        title: 'Erro no cadastro.',
        description: 'Occorreu erro ao se cadastrar. Tente Novamente.'
      });

    }
  }, [addToast, history]);

  return (
  <Container>

    <Background>

    </Background>
    <Content>
      <AnimationContainer>
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
        <Link to="/">
          <FiArrowLeft/>
          Voltar para Logon
        </Link>
      </AnimationContainer>
    </Content>

  </Container>)
};

export default SignUp;
