import React, { useState } from "react";
import { Button, Input, ErrorMessage } from 'components'
import { Container, Title, ScrollView, KeyboardAvoidingView, Form, LinkText } from './styles';
import { errorHandler } from "utils/errors";
import { translate } from "locales";
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
                        <Title>{translate("app.name")}</Title>
                        <ErrorMessage>{errors.generic}</ErrorMessage>
                        <Input error={errors.email} autoCapitalize="none" placeholder={translate("auth.login.form.username")} onChangeText={setUsername} />
                        <Input error={errors.password} placeholder={translate("auth.login.form.password")} password onChangeText={setPassword} />
                        <Button loading={loading} onPress={login}>{translate("auth.login.form.button")}</Button>
                        <LinkText onPress={() => { navigation.navigate("Register") }}>{translate("auth.login.registerLink")}</LinkText>
                        <LinkText onPress={() => { navigation.navigate("ForgetPassword") }}>{translate("auth.login.forgotPasswordLink")}</LinkText>
                    </Form>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    )
}