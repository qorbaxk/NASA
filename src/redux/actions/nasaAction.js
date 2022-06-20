import api from "../api";
import { nasaActions } from "../reducers/nasaReducer";

const API_KEY = process.env.REACT_APP_API_KEY;

function getImg(){
    return async (dispatch)=>{

        const apodImgApi = await api.get(
            `/apod?api_key=${API_KEY}&count=5`
        );

        let [apodImg] = await Promise.all([apodImgApi]);
        

        console.log(apodImg.data);
        dispatch(nasaActions.getMainImg({
            apodImg:apodImg.data,
        }))
    }
}

export const nasaAction = {getImg};