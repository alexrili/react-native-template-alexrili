import React, { useState } from 'react';

import { Input, PasswordContainer,  IconContainer} from './styles';
import  Icon  from '../Icon';

export default (props) => {

    const [hideText, setShowText] = useState(true);

    function toggleHideText() {
        setShowText(!hideText)
    }

    return (
        <PasswordContainer>
            <Input {...props} secureTextEntry={hideText} />
            <IconContainer>
                <Icon name={hideText ? "eye-off" : "eye"} onPress={toggleHideText} />
            </IconContainer>
        </PasswordContainer>
    );
}
