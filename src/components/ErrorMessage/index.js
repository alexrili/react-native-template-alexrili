import React from 'react';

import { ErrorText } from './styles';

export default (props) => <ErrorText> {props.children && `* ${props.children}`}</ErrorText>;

