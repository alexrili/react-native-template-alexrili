import React from "react";

import { ImageBackground, Button } from './styles';

export default ({ navigation }) => (
    <ImageBackground source={{ uri: "https://i.pinimg.com/originals/a0/e4/ff/a0e4ffd97de87d07f3ed020e07aae0bb.jpg" }}>
        <Button title="Go to Home" onPress={() => navigation.navigate("App")} />
    </ImageBackground>
)
