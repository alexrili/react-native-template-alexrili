import React from 'react';

import { Input } from './styles';
import PasswordField from './PasswordField';

export default (props) => {

    if (props.password) {
        return <PasswordField {...props}  />
    }

    return (
        <Input {...props} />
    );
}
