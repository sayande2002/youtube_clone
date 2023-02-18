import React from "react";
import SearchVideo from "../../components/searchvideo/searchvideo.component";

import "./searchpage.component.scss";
const SearchPage = () => {
  return (
    <div className="search__videos">
      <hr className="search__hr" />
      {[...Array(20)].map(() => (
        <SearchVideo />
      ))}
    </div>
  );
};

export default SearchPage;
