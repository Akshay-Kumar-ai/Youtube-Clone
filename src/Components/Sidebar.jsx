import React from "react"; 

import SidebarRow from "./sidebarRow";
import "./Sidebar.css";

import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import RestoreSharpIcon from "@mui/icons-material/RestoreSharp";
import PlaylistPlaySharpIcon from "@mui/icons-material/PlaylistPlaySharp";
import SlideshowSharpIcon from '@mui/icons-material/SlideshowSharp';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
      <SidebarRow Icon={RestoreSharpIcon} title="History" />
      <hr />
      <SidebarRow Icon={PlaylistPlaySharpIcon} title="Playlist" />
      <SidebarRow Icon={SlideshowSharpIcon} title="Your Videos" />
      <SidebarRow Icon={ScheduleSharpIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpIcon} title="Liked Videos" />
      <hr />

      
    </div>
  );
}

export default Sidebar;
