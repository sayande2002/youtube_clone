import React from "react";
import Topbar from "../../components/topbar/topbar.component";
import Video from "../../components/video/video.component";

import "./homepage.component.scss";
const HomePage = () => {
  return (
    <div>
      <Topbar />
      <div className="videos">
        {[...Array(20)].map(() => (
          <Video />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
