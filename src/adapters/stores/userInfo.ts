import { createSlice } from '@reduxjs/toolkit'
import User from 'src/domain/entities/user'

const userInfoStore = createSlice({
    name: 'user',
    initialState: new User({}),
    reducers: {
        fetchUser: (state, action) => {
            return new User(action.payload)
        },
    },
})

export default userInfoStore