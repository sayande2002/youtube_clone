import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import "./sidebarclose.component.scss";
const SidebarClose = () => {
  return (
    <div className="sidebarclose">
      <div className="sidebarclose__items">
        <HomeOutlinedIcon className="sidebarclose__items__icon" />
        <span className="sidebarclose__items__text">Home</span>
      </div>
      <div className="sidebarclose__items">
        <ExploreOutlinedIcon className="sidebarclose__items__icon" />
        <span className="sidebarclose__items__text">Explore</span>
      </div>
      <div className="sidebarclose__items">
        <SubscriptionsOutlinedIcon className="sidebarclose__items__icon" />
        <span className="sidebarclose__items__text">Subscriptions</span>
      </div>

      <div className="sidebarclose__items">
        <VideoLibraryOutlinedIcon className="sidebarclose__items__icon" />
        <span className="sidebarclose__items__text">Library</span>
      </div>
    </div>
  );
};

export default SidebarClose;
