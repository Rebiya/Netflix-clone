import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/img/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li className="li-img">
              <img src={NetflixLogo} alt="#" />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TvShows</a>
            </li>
            <li>
              <a href="#">Movie</a>
            </li>
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">MyList</a>
            </li>
            <li>
              <a href="#">Browse by Languages</a>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
