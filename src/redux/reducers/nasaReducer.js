import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    apodImg:{},
    loading:true,
    mainMedia:{},
    birthImg:{},
    date:"",
};

const imgSlice = createSlice({
    name:"img",
    initialState,
    reducers:{
        getApodImg(state,action){
            state.apodImg = action.payload.apodImg;
            state.loading = false;
        },
        getImgRequeset(state,action){
            state.loading = true;
        },
        getImgFailure(state,action){
            state.loading = true;
        },
        getMainMedia(state,action){
            state.mainMedia = action.payload.mainMedia;
            state.loading = false;
        },
        getBirthImg(state,action){
            state.birthImg = action.payload.birthImg;
            state.loading = false;
        },
        getDating(state,action){
            state.date = action.payload.date;
        }

    }
});

export const nasaActions = imgSlice.actions;
export default imgSlice.reducer;