import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../../components/topbar/topbar.component";
import Video from "../../components/video/video.component";
import Videoskeleton from "../../components/videoskeleton/videoskeleton.component";
import { fetchPopularVideos } from "../../redux/videoSlice";

import "./homepage.component.scss";
const HomePage = () => {
  const { isLoading, videos } = useSelector((state) => state.homeVideos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularVideos());
  }, []);

  return (
    <>
      <Topbar />
      <div className="home__videos">
        {videos.map((video, i) =>
          isLoading ? (
            <Videoskeleton key={i} />
          ) : (
            <Video video={video} key={video.id} />
          )
        )}
      </div>
    </>
  );
};
export default HomePage;
