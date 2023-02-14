import React from "react";
import Topbar from "../topbar/topbar.component";
import Thumbnail from "../../assests/thumbnail.jpg";
import Channel from "../../assests/channel.jpg";
import "./homepage.component.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      <Topbar />
      <div className="vidoes"></div>
      {/* <div className="vid">
          <div className="top">
            <img src={Thumbnail} alt="" />
          </div>
          <div className="bottom">
            <img src={Channel} alt="" />
          </div>
        </div> */}
    </div>
  );
};
export default HomePage;
