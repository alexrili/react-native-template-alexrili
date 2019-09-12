import Types from './types'

const INTIAL_STATE = {}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {

        case Types.SET_PROFILE:
            return { ...action.data }

        case Types.CLEAN_UP_PROFILE:
            return {}

        default:
            return state

    }

}