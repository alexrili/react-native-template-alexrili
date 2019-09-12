import styled from "styled-components/native";



export const Container = styled.View`
    position:relative;
`

export const Input = styled.TextInput`
    background-color:#FFF;
    margin-vertical:10;
    margin-horizontal:15;
    padding-vertical:15;
    padding-horizontal:20;
    border-radius:30;
    border-color:${({ theme }) => theme.gray};
    border-width:1;
    font-size:16;
    font-weight:bold;
`

export const IconContainer = styled.View`
    position:absolute;
    right:30;
    top:27;
`