import { combineReducers, configureStore } from "@reduxjs/toolkit"
import listPostsStore from "./listPosts";
import profileStore from "./profile"
import userInfoStore from "./userInfo";

const rootReducer = combineReducers({
    profile: profileStore.reducer,
    listPosts: listPostsStore.reducer,
    userInfo: userInfoStore.reducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store