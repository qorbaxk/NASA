import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    apodImg:{},
};

const imgSlice = createSlice({
    name:"img",
    initialState,
    reducers:{
        getMainImg(state,action){
            state.apodImg = action.payload.apodImg;
        }

    }
});

export const nasaActions = imgSlice.actions;
export default imgSlice.reducer;