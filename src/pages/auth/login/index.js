import React, { useState } from "react";
import { Button, Input, ErrorMessage } from 'components'
import { Container, Title, ScrollView, KeyboardAvoidingView, Form, LinkText } from './styles';
import { errorHandler } from "utils/errors";

import Auth from "services/auth"

export default ({ navigation }) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    async function login() {
        try {
            setLoading(true);
            setErrors({})
            await Auth.loginByUsernameAndPassoword({ username, password })
            navigation.navigate("App");
        } catch (error) {
            setLoading(false)
            setErrors(errorHandler(error));
        }
    }

    return (
        <Container>
            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={Platform.select({
                    ios: 0,
                    android: -500
                })}>
                <ScrollView>
                    <Form>
                        <Title>app</Title>
                        <ErrorMessage>{errors.generic}</ErrorMessage>
                        <Input autoCapitalize="none" placeholder="usuário" onChangeText={setUsername} />
                        <Input placeholder="senha" password onChangeText={setPassword} />
                        <Button loading={loading} onPress={login}>login</Button>
                        <LinkText onPress={() => { navigation.navigate("ForgetPassword") }}>Esqueceu sua senha?</LinkText>
                    </Form>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    )
}