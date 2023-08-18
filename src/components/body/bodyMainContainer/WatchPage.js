import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeTogglemenu } from "../../../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import { CommentContainer } from "./CommentContainer";
import { YOUTUBE_VIDEO_WATCH_API } from "../../../utils/constant";
import likeIcon from "../../../assets/img/like.svg";
import disLikeIcon from "../../../assets/img/dislike.svg";
import shareIcon from "../../../assets/img/share.svg";
import downloadIcon from "../../../assets/img/download.svg";
import moreIcon from "../../../assets/img/more.svg";
import LiveChat from "./LiveChat";

export const WatchPage = () => {
  const [video, setVideos] = useState({});
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  let videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeTogglemenu());
    getwatchVidosDetails();
  }, [videoId]);

  const getwatchVidosDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_WATCH_API + videoId);
    const watchData = await data.json();

    console.log("watchdata", watchData.items);
    setVideos(watchData?.items[0]);
    console.log("{video?.snippet?.title", video?.snippet?.title);
  };
  return (
    <div
      className={`${!isMenuOpen ? "px-20" : "px-3"} col-span-11 pt-6 flex-col`}
    >
      <div className="flex-grow-9">
        <div className="flex">
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullscreen
          ></iframe>
          <div className="">
            <LiveChat />
          </div>
        </div>
      </div>
      <div className="p-2 m-2">
        <div>
          <div className="font-medium text-[18px]">{video?.snippet?.title}</div>
          <div className="mt-2 flex">
            <div className="flex">
              <div className="flex">
                <img
                  className="rounded-full w-10 h-10"
                  alt="thumbnail"
                  src={video?.snippet?.thumbnails?.default?.url}
                />
                <div className="flex flex-col justify-center ml-2">
                  <div className="font-bold text-[16px]">
                    {video?.snippet?.channelTitle}
                  </div>
                  <div className="text-gray-500 text-[12px]">
                    {video?.statistics?.viewCount}
                    Subscriber
                  </div>
                </div>
              </div>
              <button className="bg-black rounded-full px-4 ml-2 text-white">
                Subscribe
              </button>
            </div>
            <div className="flex ml-28">
              <button className="bg-gray-100 rounded-l-full px-4 hover:bg-gray-200">
                <img alt="likeBtn" className="inline-block" src={likeIcon} />{" "}
                65K
              </button>
              <button className="bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 hover:bg-gray-200">
                <img
                  alt="dislikeBtn"
                  className="inline-block"
                  src={disLikeIcon}
                />
              </button>
              <button className="bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200">
                <img alt="shareBtn" className="inline-block" src={shareIcon} />{" "}
                Share
              </button>
              <button className="bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200">
                <img
                  alt="downloadBtn"
                  className="inline-block"
                  src={downloadIcon}
                />{" "}
                Download
              </button>
              <button className="bg-gray-100 rounded-full w-10 h-10 ml-2 hover:bg-gray-200">
                <img alt="moreBtn" className="inline-block" src={moreIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 m-2">
        <CommentContainer />
      </div>
    </div>
  );
};
