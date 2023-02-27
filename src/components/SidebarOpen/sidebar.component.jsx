import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./sidebar.component.scss";

const SidebarOpen = () => {
  const [activeElement, setActiveElement] = useState(0);
  const handleClick = (i) => setActiveElement(i);
  const categories = [
    {
      icons: <HomeOutlinedIcon />,
      activeIcons: <HomeIcon />,
      name: "Home",
    },
    {
      icons: <ExploreOutlinedIcon />,
      activeIcons: <ExploreIcon />,
      name: "Explore",
    },
    {
      icons: <SubscriptionsOutlinedIcon />,
      activeIcons: <SubscriptionsIcon />,
      name: "Subscriptions",
    },
    {
      icons: <VideoLibraryOutlinedIcon />,
      activeIcons: <VideoLibraryIcon />,
      name: "Library",
    },
    {
      icons: <HistoryOutlinedIcon />,
      activeIcons: <HistoryOutlinedIcon />,
      name: "History",
    },
    {
      icons: <SlideshowOutlinedIcon />,
      activeIcons: <SlideshowOutlinedIcon />,
      name: "Your Videos",
    },
    {
      icons: <WatchLaterOutlinedIcon />,
      activeIcons: <WatchLaterIcon />,
      name: "Watch Later",
    },
    {
      icons: <ThumbUpOutlinedIcon />,
      activeIcons: <ThumbUpIcon />,
      name: "Liked Videos",
    },
  ];
  return (
    <div className="sidebar">
      {categories.map(({ icons, activeIcons, name }, i) => (
        <div
          key={i}
          className={
            activeElement === i
              ? "sidebar__items sidebar__items--active"
              : "sidebar__items"
          }
          onClick={() => handleClick(i)}
        >
          {activeElement === i ? activeIcons : icons}
          <span className="sidebar__text">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default SidebarOpen;
