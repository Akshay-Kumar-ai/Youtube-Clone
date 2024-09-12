import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import React from "react";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.googleusercontent.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s160-c-k-c0x00ffffff-no-rj"
        channel="Marques Brownlee"
        verified
        subs="19.3M"
        noOfVideos={"1.6k"}
        description="MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"
      />

      <hr />
      <VideoRow
        views="2.4M"
        subs="19.3M"
        description={
          "Hands on and first impression with iPhone 16 and iPhone 16 Pro. Power your iPhone 16 with the latest from Anker's MagGo ..."
        }
        timestamp={"1 weeks ago"}
        channel={"Marques Brownlee"}
        title={"iPhone 16/Pro Impressions: The Great Separation!"}
        image={
          "https://i.ytimg.com/vi/9lx11dy9J30/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmJr1pO9EjwTeQiBnuyFzPvIkFBw"
        }
      />
      <VideoRow
        views="1.4M"
        subs="19.3M"
        description={
          "This is the paradox of the Boox Palma The Studio Video: https://youtu.be/HMyurkqaddc?si=7DXkeq8P9tSsiS7h&t=5 The Boox ..."
        }
        timestamp={"1 weeks ago"}
        channel={"Marques Brownlee"}
        title={"This Phone is Bad... Which Makes it Better?"}
        image={
          "https://i.ytimg.com/vi/xwTub7_we0w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4Z1cYmfZi5W9lrBXKwmuh2nI9xQ"
        }
      />
      <VideoRow
        views="5.4M"
        subs="19.3M"
        description={
          "2 week of overthinking this iPad Pro Get a real leather skin at https://dbrand.com/shop/leather "
        }
        timestamp={"2 weeks ago"}
        channel={"Marques Brownlee"}
        title={"5 Weird iPad Pro (M4) Decisions"}
        image={
          "https://i.ytimg.com/vi/PHcDrXeyguM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnTDB3Mq-xoRo8NdC80W_hEkNg5A"
        }
      />
      <VideoRow
        views="2.9M"
        subs="19.3M"
        description={
          "Pixel 9 and Pixel 9 Pro are full of AI and wrapped in premium build. What a gift."
        }
        timestamp={"2 weeks ago"}
        channel={"Marques Brownlee"}
        title={"Google Pixel 9/Pro Review: Gimmick or Good?"}
        image={
          "https://i.ytimg.com/vi/EGkGRs6YhoM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJmdukELbZecztVSr16j0pm91uRQ"
        }
      />
      <VideoRow
        views="7.4M"
        subs="19.3M"
        description={"Specced to the max and priced to crush. "}
        timestamp={"2 weeks ago"}
        channel={"Marques Brownlee"}
        title={"OnePlus 12 Review: Better Than You Think!"}
        image={
          "https://i.ytimg.com/vi/B-d97ZrAJZ0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALy0TDpCG7UJ_W9fg1Gw8i5hAGQw"
        }
      />
      <VideoRow
        views="3.9M"
        subs="19.3M"
        description={
          "AI in a Box. But a different box. Get a dbrand skin and screen protector at https://dbrand.com/rabbit "
        }
        timestamp={"3 weeks ago"}
        channel={"Marques Brownlee"}
        title={"Rabbit R1: Barely Reviewable"}
        image={
          "https://i.ytimg.com/vi/ddTV12hErTc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjsp6R8xKClpMUPtMJrJJnhEk54w"
        }
      />
      <VideoRow
        views="4.4M"
        subs="19.3M"
        description={
          "Android 15 features are more subtle and hidden than ever. These are the best ones "
        }
        timestamp={"3 weeks ago"}
        channel={"Marques Brownlee"}
        title={"Android 15 Hands-On: Top 5 Features!"}
        image={
          "https://i.ytimg.com/vi/kkX8_nbBqBQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbeQYDBvd8iO9-WVeWOQxm-PbrKg"
        }
      />
    </div>
  );
}

export default SearchPage;
