import React, { useRef } from 'react';
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
    BackToSignIn,
    BackToSignInText,
    HackButton
} from './styles';

import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();

    return (
        <>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
                <Container>
                    <Image source={logoImg} />
                    <Title>Crie sua conta</Title>

                    <Form ref={formRef} onSubmit={(data) => console.log(data)}>
                        <Input name="name" icon="user" placeholder="Nome" />
                        <Input name="email" icon="mail" placeholder="E-mail" />
                        <Input name="password" icon="lock" placeholder="Senha" />
                        <HackButton>
                            <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
                        </HackButton>
                    </Form>
                </Container>
            </ScrollView>

            <BackToSignIn onPress={() => navigation.goBack()} >
                <Icon name="arrow-left" size={20} color="#fff" />
                <BackToSignInText>Voltar para logon</BackToSignInText>
            </BackToSignIn>
        </>
    );
};

export default SignUp;