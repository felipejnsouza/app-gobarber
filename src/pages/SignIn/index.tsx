import React, { useCallback, useRef } from 'react';
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    Container,
    Title,
    ForgotPassword,
    ForgotPasswordText,
    CreateAccountButton,
    CreateAccountButtonText,
    HackButton
} from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();

    const handleSignIn = useCallback((data: object) => {
        console.log(data);
    }, []);

    return (
        <>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
                <Container>
                    <Image source={logoImg} />
                    <Title>Faça seu logon</Title>

                    <Form ref={formRef} onSubmit={handleSignIn}>
                        <Input name="email" icon="mail" placeholder="E-mail" />
                        <Input name="password" icon="lock" placeholder="Senha" />
                        <HackButton>
                            <Button onPress={() =>
                                formRef.current?.submitForm()
                            }
                            >Entrar</Button>
                        </HackButton>
                    </Form>

                    <ForgotPassword onPress={() => { 'esqueci' }}>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                    </ForgotPassword>
                </Container>
            </ScrollView>

            <CreateAccountButton onPress={() => navigation.navigate('SignUp')} >
                <Icon name="log-in" size={20} color="#ff9000" />
                <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
};

export default SignIn;