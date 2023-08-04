import React from "react";
import harmBurgerIcon from "../../assets/img/hamburger.svg";
import youtubeIcon from "../../assets/img/youtube.svg";
import mickIcon from "../../assets/img/mike.svg";
import createIcon from "../../assets/img/create.svg";
import bellIcon from "../../assets/img/bell.svg";
import searchIcon from "../../assets/img/search.png";
import userIcon from "../../assets/img/userIcon.png";

function Header() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center py-3 px-4">
        <div className="flex flex-row items-center">
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100  cursor-pointer">
            <img className="h-6 mt-2 ml-2" alt="harmburger-icon" src={harmBurgerIcon}
            />
          </div>
          <a href="">
            <img className="h-6 ml-3 cursor-pointer" alt="youtube-icon" src={youtubeIcon}
            />
          </a>
        </div>
        <div className="flex flex-row relative">
          <input
            className="border rounded-l-full w-[572px] h-10 pl-5 outline-none"
            type="text"
            placeholder="Search"
          />
          <button className="border rounded-r-full w-16 h-10 bg-gray-100">
            <img className=" h-6 mx-auto" alt="" src={searchIcon} />
          </button>
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer">
            <img className="mt-2 ml-2" alt="mickIcon" src={mickIcon} />
          </div>
        </div>
        <div className="flex flex-row justify-around">
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 cursor-pointer ml-2">
            <img className="mt-2 ml-2" alt="create-icon " src={createIcon} />
          </div>
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer relative">
            <img className="mt-2 ml-2" alt="bell-icon " src={bellIcon} />
            <div className="absolute bg-red-700 text-white w-6 h-5 rounded-2xl border-2 border-white top-[3px] left-5 text-xs text-center">
              9+
            </div>
          </div>
          <div className="w-10 h-10 ml-5 cursor-pointer">
            <img className="mt-1 ml-2 h-7 rounded-full" alt="user-icon" src={userIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
