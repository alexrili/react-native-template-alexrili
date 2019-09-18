import React, { useState } from "react";
import { Button, Input, ErrorMessage } from 'components'
import { Container, Title, ScrollView, KeyboardAvoidingView, Form, LinkText } from './styles';
import { errorHandler } from "utils/errors";
import { translate } from "locales";
import AuthService from "services/auth"

export default ({ navigation }) => {

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    async function register() {
        try {
            setLoading(true);
            setErrors({})
            await AuthService.register({ name, username, password })
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
                        <Title>{translate("auth.register.title")}</Title>
                        <ErrorMessage>{errors.generic}</ErrorMessage>
                        <Input error={errors.name} autoCapitalize="none" placeholder={translate("auth.register.form.name")} onChangeText={setName} />
                        <Input error={errors.email} autoCapitalize="none" placeholder={translate("auth.register.form.username")} onChangeText={setUsername} />
                        <Input error={errors.password} placeholder={translate("auth.register.form.password")} password onChangeText={setPassword} />
                        <Button loading={loading} onPress={register}>{translate("auth.register.form.button")}</Button>
                        <LinkText onPress={() => { navigation.goBack() }}>{translate("auth.register.goBackLink")}</LinkText>
                    </Form>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    )
}