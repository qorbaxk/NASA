import api from "../api";
import { nasaActions } from "../reducers/nasaReducer";

const API_KEY = process.env.REACT_APP_API_KEY;

//메인페이지
function getMain() {
  return async (dispatch) => {
    try {
      dispatch(nasaActions.getImgRequeset());

      const mainApi = await api.get(`/apod?api_key=${API_KEY}`);

      let [mainMedia] = await Promise.all([mainApi]);

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

//갤러리 페이지
function getImg() {
  return async (dispatch) => {
    try {
      dispatch(nasaActions.getImgRequeset());
      const apodImgApi = await api.get(`/apod?api_key=${API_KEY}&count=20`);

      let [apodImg] = await Promise.all([apodImgApi]);

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

//apod페이지
function getBirth(date) {
  return async (dispatch) => {
    try {
      dispatch(nasaActions.getImgRequeset());

      const birthApi = await api.get(`/apod?api_key=${API_KEY}&date=${date}`);

      let [birthImg] = await Promise.all([birthApi]);

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
