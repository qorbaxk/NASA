import React, { useEffect } from "react";
import { nasaAction } from "../redux/actions/nasaAction";
import { useSelector, useDispatch } from "react-redux";
import MainMedia from "../components/MainMedia";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const { mainMedia, loading } = useSelector((state) => state.nas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nasaAction.getMain());
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="blue" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div>
      <MainMedia item={mainMedia} />
    </div>
  );
};

export default Home;
