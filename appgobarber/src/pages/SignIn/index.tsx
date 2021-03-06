import React from 'react';
import { Image, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input/';
import Button from '../../components/Button';

import {
    Container,
    Title,
    ForgotPassword,
    ForgotPasswordText,
    CreateAccountButton,
    CreateAccountButtonText
} from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {

    const navigation = useNavigation();
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <Container>
                        <Image source={logoImg} />
                        <View>
                            <Title>Faça seu Logon</Title>
                        </View>

                        <Input name="email" icon="mail" placeholder="E-mail"></Input>
                        <Input name="password" icon="lock" placeholder="Senha"></Input>

                        <Button onPress={() => { console.log('Clicou') }}>Entrar</Button>

                        <ForgotPassword onPress={() => { }}>
                            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        </ForgotPassword>

                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
            <CreateAccountButton onPress={() => {navigation.navigate('SignUp')}}>
                <Icon name="log-in" size={20} color="#ff9000"></Icon>
                <CreateAccountButtonText>Criar uma Conta</CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
};

export default SignIn;