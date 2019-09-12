import Types from "store/profile/types";

export default {

    setProfile: (profile) => ({
        type: Types.SET_PROFILE,
        data: profile
    }),

    cleanUpProfile: () => ({
        type: Types.CLEAN_UP_PROFILE,
        data: {}
    })
}