import styled from "styled-components/native";


export const ErrorText = styled.Text`
    color:${({ theme }) => theme.danger};
    font-size:12;
    font-weight:bold;
    padding-left:20;
`