import styled from "styled-components/native";

export const Container = styled.View`
    background-color:${({ theme }) => theme.white}
    flex: 1;
    justify-content: center;
    padding-horizontal:20;
    padding-vertical:20;
    flex-direction: column;
`
export const Form = styled.View`
    flex: 1;
    justify-content:center;
`


export const Title = styled.Text`
    color:${({ theme }) => theme.primary};
    font-size:45;
    font-weight:bold;
    align-self:center;
    margin-bottom:40
`

export const LinkText = styled.Text`
    color:${({ theme }) => theme.dark};
    font-size:14;
    align-self:center;
    margin-top:30;
`

export const KeyboardAvoidingView = styled.KeyboardAvoidingView``

export const ScrollView = styled.ScrollView``