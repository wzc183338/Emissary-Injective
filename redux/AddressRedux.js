import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: "address",
    initialState: {
        address: "",
    },
    reducers: {
        storeAddress: (state, action) => {
            state.address = action.payload;
        },
    },
});

export const { storeAddress } = addressSlice.actions;
export default addressSlice.reducer;
