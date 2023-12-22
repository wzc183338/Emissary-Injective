import { createSlice } from "@reduxjs/toolkit";

const emissarySlice = createSlice({
    name: "emissary",
    initialState: {},
    reducers: {
        storeEmissary: (state, action) => {
            console.log(action.payload)
            state.emissary = action.payload;
        },
    },
});

export const { storeEmissary } = emissarySlice.actions;
export default emissarySlice.reducer;
