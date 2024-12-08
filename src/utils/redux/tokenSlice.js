import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "",
}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        addToken: (state, payload) => {
            state.value = payload
        },

        removeToken: (state) => {
            state.value = ""
        },
    },
});

export const { addToken, removeToken } = tokenSlice.actions

export default tokenSlice.reducer;