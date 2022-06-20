import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    apodImg:{},
    loading:true,
};

const imgSlice = createSlice({
    name:"img",
    initialState,
    reducers:{
        getMainImg(state,action){
            state.apodImg = action.payload.apodImg;
            state.loading = false;
        },
        getImgRequeset(state,action){
            state.loading = true;
        },
        getImgFailure(state,action){
            state.loading = true;
        }

    }
});

export const nasaActions = imgSlice.actions;
export default imgSlice.reducer;