import React from "react";
import ReactPlayer from "react-player";
import ClipLoader from "react-spinners/ClipLoader";

//고른 날짜의 사진(또는 동영상)과 설명을 보여줌

const BirthMedia = ({ item, loading }) => {
  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="blue" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="birth">
      {item.media_type == "image" ? (
        <img width={720} src={item.hdurl} />
      ) : (
        <ReactPlayer
          url={item.url}
          controls="true"
          loop="true"
          muted="true"
          playing="true"
          width={720}
          style={{ margin: "auto" }}
        />
      )}

      <div className="home-explain">
        <h1>{item.title}</h1>
        <p>{item.explanation}</p>
      </div>
    </div>
  );
};

export default BirthMedia;
