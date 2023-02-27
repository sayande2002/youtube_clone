import React, { useState } from "react";
import { useDispatch } from "react-redux";
import getVideosByCategory from "../../redux/getVideosByCategory";
import "./topbar.component.scss";
const categories = [
  "All",
  "Movies",
  "Podcasts",
  "React",
  "Redux",
  "India",
  "Politics",
  "Computer Programming",
  "Science",
  "USA",
  "UK",
  "Pakistan",
  "China",
  "Brazil",
  "Argentina",
  "Dubai",
  "Songs",
];
const Topbar = () => {
  const dispatch = useDispatch();
  const [activeElement, setActiveElement] = useState("All");
  const handleClick = (value) => {
    setActiveElement(value);
    // dispatch(getVideosByCategory(value));
  };
  return (
    <div className="topbar">
      {categories.map((value, i) => (
        <div
          className={activeElement === value ? "tags tags--active" : "tags"}
          key={i}
          onClick={() => handleClick(value)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Topbar;
