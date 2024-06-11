import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../Defs/user";

const initialState: { data: User & { password: string } } = {
    data: {
        id: null,
       // firstName: null,
        //lastName: null,
        email: null,
        finger: null,
        photo: null,
        gender: null,
        preferences: null,
        interests: null,
        password: ""

    },

}

export const currentUserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        updateUser(state, action: PayloadAction<Partial<User & { password: string }>>) {
            state.data = { ...state.data, ...action.payload };
        },
        removeUser(state) {
            state.data = initialState.data;
        }
    }
})

export const { updateUser, removeUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;