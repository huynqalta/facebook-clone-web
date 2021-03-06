import store from "@stores/index";
import profileStore from "@stores/profile";
import AuthInteractor from "@useCases/auth";
import UserInteractor from "@useCases/user";

export interface IRegisterPort {
    fullName: string,
    userName: string,
    phone: string,
    email: string,
    password: string,
    avatar: string,
}

export interface ILoginPort {
    userName: string
    password: string
}

class AuthPresenter extends AuthInteractor {
    constructor() {
        super()
    }

    async register(data: IRegisterPort) {
        return await new AuthInteractor().register(data)
    }

    async login(data: ILoginPort) {
        const loginResponse = await await super.login(data).then(res => {
            super.setToken(res.token)
            return res
        })
        const userIntoractor = new UserInteractor()

        userIntoractor.getUserInfo(loginResponse.userInfo._id).then(res => {
            store.dispatch(profileStore.actions.fetch(res))
        })

        return loginResponse
    }
}

export default AuthPresenter