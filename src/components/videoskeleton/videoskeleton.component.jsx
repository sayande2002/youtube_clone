import React from "react";
import Skeleton from "../../assests/skeleton.png";
import "./videoskeleton.component.scss";
import "../video/video.component.scss";
const Videoskeleton = () => {
  return (
    <div className="video">
      <img className="video__image" src={Skeleton} alt="" />
      <div className="video__bottom">
        <img className="video__thumbnail" src={Skeleton} alt="" />
        <div className="video__info">
          <div className="videosk__title"></div>
          <div className="videosk__channel"></div>
        </div>
      </div>
    </div>
  );
};

export default Videoskeleton;
