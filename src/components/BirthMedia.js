import React from "react";
import ReactPlayer from "react-player";
import ClipLoader from "react-spinners/ClipLoader";

const BirthMedia = ({ item, loading }) => {

  console.log("영상이야",item);
  
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
