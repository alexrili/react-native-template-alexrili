import Types from "store/auth/types";

export default {

    login: (token) => ({
        type: Types.LOGIN,
        data: { token }
    }),

    logout: () => ({
        type: Types.LOGOUT
    })
}