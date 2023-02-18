import React from "react";
import Topbar from "../../components/topbar/topbar.component";
import Video from "../../components/video/video.component";
import Videoskeleton from "../../components/videoskeleton/videoskeleton.component";

import "./homepage.component.scss";
const HomePage = () => {
  return (
    <>
      <Topbar />
      <div className="home__videos">
        {[...Array(20)].map(() => (
          <Video />
        ))}
      </div>
    </>
  );
};
export default HomePage;
