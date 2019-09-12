import { createSwitchNavigator,  createAppContainer } from 'react-navigation';

import Loading from 'pages/loading'
import App from './app-stack';
import Auth from './auth-stack';

export default createAppContainer(createSwitchNavigator(
    {
        Loading,
        Auth,
        App
    },
    {
        initialRouteName: 'Loading',
    }
));