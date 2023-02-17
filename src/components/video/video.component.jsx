import React from "react";
import "./video.component.scss";
import Thumbnail from "../../assests/thumbnail.jpg";
import Channel from "../../assests/channel.jpg";
const Video = () => {
  return (
    <div className="video">
      <img className="video__image" src={Thumbnail} alt="" />
      <div className="video__bottom">
        <img className="video__thumbnail" src={Channel} alt="" />
        <div className="video__info">
          <p className="video__title">
            This is a demo template of the Vidoe of Css and I am going
          </p>
          <p className="video__channel">Channel Name</p>
          <span className="video__views">1k Views • </span>
          <span className="video__time">10 Days ago</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
