import React from 'react';

import { Input, Container } from './styles';
import PasswordField from './PasswordField';
import ErrorMessage from '../ErrorMessage';

export default (props) => {
    return (
        <Container>
            {props.password ? <PasswordField {...props} /> : <Input {...props} />}
            {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
        </Container>
    );
}
