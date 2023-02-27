import React, { useState } from "react";
import "./topbar.component.scss";
const Topbar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const handleClick = (value) => setActiveElement(value);

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
