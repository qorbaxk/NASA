import {configureStore} from "@reduxjs/toolkit";
import nasaReducer from "./reducers/nasaReducer";

const store = configureStore({
    reducer:{
        nas: nasaReducer,
    }

});


export default store;