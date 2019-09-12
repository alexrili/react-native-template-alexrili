import styled from 'styled-components/native';

import IconTypes from './IconTypes';

export const Icon = (type) => {
    const customIcon = IconTypes(type);
    return styled(customIcon)`
        color:${({ theme }) => theme.primary}
        font-size:18;
    `
}