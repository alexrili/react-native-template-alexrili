import styled from "styled-components/native";


export const ErrorText = styled.Text`
    color:${({ theme }) => theme.danger};
    font-size:16;
    font-weight:bold;
    align-self:center;
`