import UserPresenter from "src/adapters/presentation/user"
const { getUserInfo, getProfile } = new UserPresenter()
const useUser = () => {

    return {
        getUserInfo,
        getProfile
    }
}

export default useUser