import api from "../api";
import { nasaActions } from "../reducers/nasaReducer";

const API_KEY = process.env.REACT_APP_API_KEY;

function getImg() {
  return async (dispatch) => {
    try {
      dispatch(nasaActions.getImgRequeset());
      const apodImgApi = await api.get(`/apod?api_key=${API_KEY}&count=20`);

      let [apodImg] = await Promise.all([apodImgApi]);

      console.log(apodImg.data);

      dispatch(
        nasaActions.getApodImg({
          apodImg: apodImg.data,
        })
      );
    } catch (error) {
      dispatch(nasaActions.getImgFailure());
    }
  };
}

function getMain() {
  return async (dispatch) => {
    try {
      dispatch(nasaActions.getImgRequeset());

      const mainApi = await api.get(`/apod?api_key=${API_KEY}`);

      let [mainMedia] = await Promise.all([mainApi]);

      console.log(mainMedia.data);

      dispatch(
        nasaActions.getMainMedia({
          mainMedia: mainMedia.data,
        })
      );
    } catch (error) {
      dispatch(nasaActions.getImgFailure());
    }
  };
}

function getBirth(date){
  return async (dispatch) => {
    try {
      dispatch(nasaActions.getImgRequeset());

      const birthApi = await api.get(`/apod?api_key=${API_KEY}&date=${date}`);

      let [birthImg] = await Promise.all([birthApi]);

      console.log(birthImg.data);

      dispatch(
        nasaActions.getBirthImg({
          birthImg: birthImg.data,
        })
      );
    } catch (error) {
      dispatch(nasaActions.getImgFailure());
    }
  };
}
export const nasaAction = { getImg, getMain, getBirth };
