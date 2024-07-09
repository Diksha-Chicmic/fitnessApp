import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../Defs/user";

const initialState: { data: User & { password: string } } = {
    data: {
        id: null,
        firstName: null,
        lastName: null,
        email: '',
        finger: null,
        photo: null,
        gender: null,
        preferences: [],
        interests: [],
        password: "",
        healthData:[]

    },

}

export const currentUserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        updateImage(state, action:PayloadAction<string>) {
            state.data.photo = action.payload;
            console.log(state.data.photo,"image updated")
        },
        updateUser(state, action: PayloadAction<Partial<User & { password: string }>>) {
            state.data = { ...state.data, ...action.payload };
            console.log('usdfnisdugnvdiungviudni',state.data)
        },
        removeUser(state) {
            state.data = initialState.data;
        }
    }
})

export const { updateUser, removeUser,updateImage } = currentUserSlice.actions;
export default currentUserSlice.reducer;