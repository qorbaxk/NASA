import React from "react";
import ReactPlayer from "react-player";
import moment from "moment";

const MainMedia = ({ item }) => {
  return (
    <div className="main-back">
      <div className="contents-back ">
     
        <h1>Astronomy Picture of Today</h1>

        <div className="medias">
          {item.media_type == "image" ? (
            <img src={item.hdurl} width={1024} height={600} />
          ) : (
            <ReactPlayer
              url={item.url}
              controls="true"
              loop="true"
              muted="true"
              playing="true"
              width={1024}
              height={600}
              style={{ margin: "auto" }}
            />
          )}
          <div className="home-explain">
            <h4>{item.title}</h4>
            <h6>copyright © {item.copyright}</h6>
            <p>{item.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMedia;
