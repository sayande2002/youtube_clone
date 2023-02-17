import React from "react";
import "./header.component.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ReactComponent as Logo } from "../../assests/YouTube_Logo_2017.svg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Link } from "react-router-dom";
import Image from "../../assests/CircleImage.png";
const Header = ({ open, setOpen }) => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__left__menu" onClick={() => setOpen(!open)}>
          <MenuRoundedIcon />
        </div>
        <Link to="/">
          <Logo className="header__left__yticon" />
        </Link>
      </div>
      <div className="header__center">
        <form className="header__center__search_box">
          <input placeholder="Search" className="search_bar" />
          <button type="submit" className="search_btn">
            <SearchIcon className="search__icon" />
          </button>
        </form>
        <div className="header__center__voice">
          <KeyboardVoiceRoundedIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__addvideo">
          <VideoCallOutlinedIcon />
        </div>
        <div className="header__right__notification">
          <NotificationsOutlinedIcon />
        </div>
        <div className="header__right__user_dp">
          <img src={Image} alt="" className="image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
