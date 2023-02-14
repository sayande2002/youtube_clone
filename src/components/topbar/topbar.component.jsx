import React from "react";
import "./topbar.component.scss";
const Topbar = () => {
  const categories = [
    "All",
    "Mixes",
    "Podcasts",
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
    "Saudi Arabia",
    "Thialand",
    "Mexico",
    "Canada",
    "Movies",
    "Trailer",
    "Thriller",
    "Web Series",
    "Songs",
  ];
  return (
    <div className="topbar">
      {categories.map((categories) => (
        <div className="tags">{categories}</div>
      ))}
    </div>
  );
};

export default Topbar;
