import Types from './types'

const INTIAL_STATE = { isAuth: false, token: '' }

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {

        case Types.LOGIN:
            return {  isAuth: true, token: action.data.token }

        case Types.LOGOUT:
            return {  isAuth: false, token: '' }

        default:
            return state

    }

}