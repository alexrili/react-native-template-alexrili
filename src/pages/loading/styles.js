import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    resize-mode:cover;
    align-items:center;
    justify-content:center;
    background:${({ theme }) => theme.primary}
`

export const Loading = styled.ActivityIndicator`

`

export const Text = styled.Text`
    color:${({ theme }) => theme.white};
    font-size:20;
    margin-top:10
`