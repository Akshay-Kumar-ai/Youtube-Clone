import CircleIcon from "@mui/icons-material/Circle";
import { Avatar } from "@mui/material";
import React from "react";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views+ " "}
            <CircleIcon sx={{ fontSize: 5, padding:-1, marginTop: -2 }} />
            { " "+timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
