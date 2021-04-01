import React from 'react';
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
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
    return (
        <>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
                <Container>
                    <Image source={logoImg} />
                    <Title>Faça seu logon</Title>

                    <Input name="email" icon="mail" placeholder="E-mail" />
                    <Input name="password" icon="lock" placeholder="Senha" />

                    <Button onPress={() => console.log("clicou")}>Entrar</Button>

                    <ForgotPassword onPress={() => { 'esqueci' }}>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                    </ForgotPassword>
                </Container>
            </ScrollView>

            <CreateAccountButton onPress={() => { 'criar' }} >
                <Icon name="log-in" size={20} color="#ff9000" />
                <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
};

export default SignIn;