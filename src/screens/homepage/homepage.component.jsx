import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../../components/category/category.component";
import Video from "../../components/video/video.component";
import Videoskeleton from "../../components/videoskeleton/videoskeleton.component";
import { getPopularVideos } from "../../redux/popularSlice";
import "./homepage.component.scss";

const HomePage = () => {
  const { videos, isLoading } = useSelector((state) => state.homeVideos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <>
      <Category />
      <div className="home__videos">
        {!isLoading
          ? videos.map((video) => (
              <Video video={video} key={video.id.videoId} />
            ))
          : [...new Array(20)].map(() => <Videoskeleton />)}
      </div>
    </>
  );
};
export default HomePage;
