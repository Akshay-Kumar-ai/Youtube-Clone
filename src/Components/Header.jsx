import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Grid } from "@mui/material";
import React, { useState ,useRef} from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200); // Timeout to avoid flickering
  };
  

  return (
    // <Grid spacing={2}>
    <div className="Header">
      {/* <Grid xs={4}> */}
      <div className="Header__Left">
        <MenuIcon />
        <Link to="/">
          <img
            className="Header__Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png?20230929095411"
            alt="YT-Logo"
            backgroundcolor="black"
          />
        </Link>
      </div>
      {/* </Grid> */}

      <div className="Header__Input">
        <div className="Header__Search">
          <div className="Header__Search__Input_Div">
            <span>
              <SearchIcon
                className={`Header__Search__Icon__N ${
                  isFocused ? "visible" : ""
                }`}
              />
            </span>

            <input
              className="Header__Search__Input"
              onChange={(e) => setInputSearch(e.target.value)}
              value={inputSearch}
              placeholder="Search"
              type="text"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <Link className="Search__Link" to={`/search/${inputSearch}`}>
            <SearchIcon className="Header__Search__Icon" />
          </Link>
        </div>


        <div className="Header__Mic">
          <MicIcon className="Header__Mic__Icon" />
        </div>
      </div>

      <div className="Header__Right">
        <VideoCallOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <AccountCircleOutlinedIcon />
      </div>
    </div>
    // </Grid>
  );
};

export default Header;
