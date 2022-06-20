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
        nasaActions.getMainImg({
          apodImg: apodImg.data,
        })
      );
    } catch (error) {
      dispatch(nasaActions.getImgFailure());
    }
  };
}

export const nasaAction = { getImg };
