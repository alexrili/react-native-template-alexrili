import React from "react";
import { useSelector } from "react-redux";
import { Button } from 'components'
import { Container, Title, Text } from './styles';

import Auth from "services/auth"

export default ({ navigation }) => {
    const auth = useSelector(state => state.auth)
    const profile = useSelector(state => state.profile)

    function logout() {
        Auth.logout()
        navigation.navigate("Loading")
    }

    return (
        <Container>
            <Title>Auth: {(auth.isAuth).toString()}</Title>
            <Text>name: {profile.name}</Text>
            <Button onPress={logout}>logout</Button>
        </Container>
    )
}