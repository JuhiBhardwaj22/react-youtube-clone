import React from "react";
import homeIcon from '../../../assets/img/home.svg';
import shortsIcon from '../../../assets/img/shorts.svg';
import subscriptionsIcon from '../../../assets/img/subscriptions.svg';
import redLiveIcon from '../../../assets/img/red-live.svg';

import libraryIcon from '../../../assets/img/library.svg';
import historyIcon from '../../../assets/img/history.svg';
import yourVideosIcon from '../../../assets/img/yourVideos.svg';
import watchLaterIcon from '../../../assets/img/watchLater.svg';
import likedVideosIcon from '../../../assets/img/likedVideos.svg';
import showMoreIcon from '../../../assets/img/showMore.svg';

import trendingIcon from '../../../assets/img/trending.svg';
import shoppingIcon from '../../../assets/img/shopping.svg';
import musicIcon from '../../../assets/img/music.svg';
import moviesIcon from '../../../assets/img/movies.svg';
import liveIcon from '../../../assets/img/live.svg';
import gamingIcon from '../../../assets/img/gaming.svg';
import newsIcon from '../../../assets/img/news.svg';
import sportsIcon from '../../../assets/img/sports.svg';
import learningIcon from '../../../assets/img/learning.svg';
import fashionAndBeautyIcon from '../../../assets/img/fashionAndBeauty.svg';

import ytPremiumIcon from '../../../assets/img/yt-premium.svg';
import ytStudioIcon from '../../../assets/img/yt-studio.svg';
import ytMusicIcon from '../../../assets/img/yt-music.svg';
import ytKidsIcon from '../../../assets/img/yt-kids.svg';

import settingsIcon from '../../../assets/img/settings.svg';
import reportHistoryIcon from '../../../assets/img/reportHistory.svg';
import helpIcon from '../../../assets/img/help.svg';
import sendFeedbackIcon from '../../../assets/img/sendFeedback.svg';

function Sidebar(){
  return(
    <div className="p-5 col-span-1 max-h-screen hover:overflow-y-scroll top-[64px] bg-white">
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'"><img className="inline-block mr-2 align-bottom" src={homeIcon} alt="homeIcon"/>Home</li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'"><img className="inline-block mr-2 align-bottom" src={shortsIcon} alt="Short"/>Short</li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'"><img className="inline-block mr-2 align-bottom" src={subscriptionsIcon} alt="Subscriptions"/>Subscriptions</li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'> <img className='inline-block align-bottom mr-3' src={libraryIcon} alt="Library" /> Library</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={historyIcon} alt="History" /> History</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={yourVideosIcon} alt="YourVideos" /> Your Videos</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={watchLaterIcon} alt="WatchLater" /> Watch Later</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={likedVideosIcon} alt="LikedVideos" /> Liked Videos</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'> <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" /> Show More</li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className='font-medium pt-5'>Subscriptions</h1>
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'>Scary Fun <img className='inline-block align-bottom mr-3' src={redLiveIcon} alt="ScaryFun" /> </li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'>Crime Tak <img className='inline-block align-bottom mr-3' src={redLiveIcon} alt="CrimeTak" /> </li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'>Show More... <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" /> </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className='font-medium pt-5'>Explore</h1>
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={trendingIcon} alt="Trending" /> Trending</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={shoppingIcon} alt="Shopping" /> Shopping</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={musicIcon} alt="Music" /> Music</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={moviesIcon} alt="Movies" /> Movies</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={liveIcon} alt="Live" /> Live</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={gamingIcon} alt="Gaming" /> Gaming</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={newsIcon} alt="News" /> News</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={sportsIcon} alt="Sports" /> Sports</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={learningIcon} alt="Learning" /> Learning</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={fashionAndBeautyIcon} alt="FashionBeauty" /> Fashion & Beauty</li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className='font-medium pt-5'>More From Youtube</h1>
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={ytPremiumIcon} alt="YoutubePremium" /> Youtube Premium</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={ytStudioIcon} alt="YoutubeStudio" /> Youtube Studio</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={ytMusicIcon} alt="YoutubeMusic" /> Youtube Music</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={ytKidsIcon} alt="YoutubeKids" /> Youtube Kids</li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={settingsIcon} alt="Settings" /> Settings</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={reportHistoryIcon} alt="ReportHistory" /> Report History</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={helpIcon} alt="Help" /> Help</li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><img className='inline-block align-bottom mr-3' src={sendFeedbackIcon} alt="Send Feedback" /> Send Feedback</li>
      </ul>

    </div>
  )

}
export default Sidebar;
