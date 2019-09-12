import styled from "styled-components/native";

export const TouchButton = styled.TouchableOpacity`
    background-color:${({ theme }) => theme.primary};
    margin-vertical:10;
    margin-horizontal:15;
    padding-vertical:15;
    padding-horizontal:20;
    border-radius:30;
    border-color:${({ theme }) => theme.white};
    border-width:1;
    align-items:center
`

export const TextButton = styled.Text`
    color:${({ theme }) => theme.white};
    font-size:16;
    font-weight:bold;
`


export const Loading = styled.ActivityIndicator`

`

export const ContainerButton = styled.View`
    background-color:${({ theme }) => theme.primary};
    margin-vertical:10;
    margin-horizontal:15;
    padding-vertical:15;
    padding-horizontal:20;
    border-radius:30;
    border-color:${({ theme }) => theme.white};
    border-width:1;
    align-items:center
`