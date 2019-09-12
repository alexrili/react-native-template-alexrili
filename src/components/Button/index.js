import React, { useContext } from 'react';

import { TouchButton, TextButton, ContainerButton, Loading } from './styles';
import { ThemeContext } from "styled-components/native";
export default (props) => {
    const theme = useContext(ThemeContext);
    if (props.loading) {
        return (
            <ContainerButton {...props}>
                <Loading color={theme.white} />
            </ContainerButton>
        )
    }

    return (
        <TouchButton {...props}>
            <TextButton>{props.children}</TextButton>
        </TouchButton>
    );
}
