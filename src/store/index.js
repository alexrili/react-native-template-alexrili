import { createStore, combineReducers } from "redux";

import auth from './auth/reducers'
import profile from './profile/reducers'

const reducers = combineReducers({
    auth,
    profile
})

export default createStore(reducers)