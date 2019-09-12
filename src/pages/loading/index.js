import React, { useEffect, useContext } from 'react';
import { Container, Loading, Text } from './styles';
import { ThemeContext } from 'styled-components';

import AuthService from "services/auth";

const AuthLoading = ({ navigation }) => {

    const theme = useContext(ThemeContext);

    useEffect(() => {
        checkAuth()
    })
    async function checkAuth() {
        try {
            await AuthService.checkIfUserIsAuthenticated()
            navigation.navigate("App")
        } catch (error) {
            navigation.navigate("Auth")
        }
    }
    return (
        <Container>
            <Loading color={theme.white} />
            <Text>loading</Text>
        </Container>
    );
}

export default AuthLoading;
