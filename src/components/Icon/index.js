import React from 'react';
import { TouchableOpacity } from 'react-native';


import { Icon } from './styles';

export default ({ name, size, type, onPress }) => {
    const IconComponent = Icon(type);
    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress}>
                <IconComponent name={name} size={size} />
            </TouchableOpacity>
        );
    }
    return <IconComponent name={name} size={size} />;
};