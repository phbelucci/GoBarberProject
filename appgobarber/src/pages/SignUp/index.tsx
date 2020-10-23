import React from 'react';
import { Image, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input/';
import Button from '../../components/Button';

import {
    Container,
    Title,
    BackToSignIn,
    BackToSignInText
} from './styles';

import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {

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
                            <Title>Crie sua Conta</Title>
                        </View>

                        <Input name="name" icon="user" placeholder="Nome"></Input>
                        <Input name="email" icon="mail" placeholder="E-mail"></Input>
                        <Input name="password" icon="lock" placeholder="Senha"></Input>

                        <Button onPress={() => { console.log('Clicou') }}>Entrar</Button>

                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <BackToSignIn onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={20} color="#fff"></Icon>
                <BackToSignInText>Voltar para Logon</BackToSignInText>
            </BackToSignIn>
        </>
    );
};

export default SignUp;