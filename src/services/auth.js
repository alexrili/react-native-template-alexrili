import AuthAction from "store/auth/actions"
import ProfileAction from "store/profile/actions"
import store from 'store';
import AsyncStorage from '@react-native-community/async-storage';
import api from "api/auth"

class AuthService {

    loginByUsernameAndPassoword = async ({ username, password }) => {
        const { data } = await api.loginByUsernameAndPassoword({ username, password });
        this.__authenticate(data);
    }

    logout = () => {
        this.__cleanUpSession()
    }

    async checkIfUserIsAuthenticated() {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const { data } = await this.getUserInfos();
                if (data) {
                    this.__authenticate(data);
                    return true;
                }
            }
            throw new Error("Permission denied!")
        } catch (error) {
            throw error;
        }
    }

    getUserInfos = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: { name: "Alex Ribeiro", email: "alex@onload.com.br", token: "l13opf0983lh67f" } });
            }, 100)
        })
    }

    fakeLogin = ({ username, password }) => {
        return this.getUserInfos()
    }

    getToken = () => {
        const { auth } = store.getState();
        if (auth) {
            return auth.token;
        }
        return;
    }

    __authenticate = (user) => {
        AsyncStorage.setItem("token", user.token);
        store.dispatch(AuthAction.login(user.token));
        store.dispatch(ProfileAction.setProfile(user));
    }

    __cleanUpSession = () => {
        AsyncStorage.removeItem("token");
        store.dispatch(AuthAction.logout());
        store.dispatch(ProfileAction.cleanUpProfile());
    }
}

export default new AuthService()