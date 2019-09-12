import React, { useState } from "react";
import { Button, Input } from 'components'
import { Container, Title, ScrollView, KeyboardAvoidingView, Form, LinkText } from './styles';


import Auth from "services/auth"

export default ({ navigation }) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    async function login() {
        try {
            setLoading(true);
            await Auth.loginByUsernameAndPassoword({ username, password })
            navigation.navigate("App");
        } catch (error) {
            setLoading(false)
            // handle with errors
            console.log(error)
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