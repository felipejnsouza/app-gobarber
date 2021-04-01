import React, { useRef } from 'react';
import { Image, ScrollView, TextInput } from 'react-native';
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
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);

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
                        <Input
                            autoCapitalize="words"
                            name="name"
                            icon="user"
                            placeholder="Nome"
                            returnKeyType="next"
                            onSubmitEditing={
                                () => emailInputRef.current?.focus()
                            }
                        />
                        <Input
                            ref={emailInputRef}
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            name="email"
                            icon="mail"
                            placeholder="E-mail"
                            returnKeyType='next'
                            onSubmitEditing={
                                () => passwordInputRef.current?.focus()
                            }
                        />
                        <Input
                            ref={passwordInputRef}
                            name="password"
                            icon="lock"
                            placeholder="Senha"
                            secureTextEntry
                            textContentType="newPassword"
                            returnKeyType="send"
                            onSubmitEditing={() => formRef.current?.submitForm()}
                        />
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