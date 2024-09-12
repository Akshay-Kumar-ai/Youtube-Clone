import React from 'react';
import "./VideoRow.css";
import CircleIcon from "@mui/icons-material/Circle";

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel + " "}
          <CircleIcon sx={{ fontSize: 5, padding: -1, marginTop: -2 }} />{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>{" "}
          <CircleIcon sx={{ fontSize: 5, padding: -1, marginTop: -2 }} />{" "}
          {views} views{" "}
          <CircleIcon sx={{ fontSize: 5, padding: -1, marginTop: -2 }} />{" "}
          {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow
