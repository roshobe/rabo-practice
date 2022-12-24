import React from "react";
import { GiBinoculars } from "react-icons/gi";
import { BiSearchAlt, BiHomeAlt, BiCompass } from "react-icons/bi";
import {
  HiOutlineMail,
  HiOutlineClipboardList,
  HiOutlineBookmark,
  HiOutlineBell,
} from "react-icons/hi";
import { RiBookLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { TbWriting } from "react-icons/tb";

function SideBar() {
  return (
    <div className="flex flex-col min-w-fit ">
      <div className="flex items-center p-1 justify-between ">
        <div className="flex items-center pl-1 gap-4">
          <span className="mt-2 text-lg font-medium text-text">Logo</span>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center space-y-2">
        <div className=" relative text-gray-600">
          <button type="submit" className="absolute left-2 top-0 mt-3 mr-4">
            <BiSearchAlt />
          </button>
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-white h-10 px-7 pr-10 rounded-full text-sm focus:outline-none w-48"
          />
        </div>
        <span className="mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-48">
          <img
            className="rounded-full w-10 h-10 max-w-none"
            alt="A"
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
          />
          <span className="flex items-center px-3 py-2">John Doe</span>
        </span>
        <div className="my-4 border-b border-gray-100 pb-4">
          <div className="flex  justify-start pb-2 items-center gap-2 hover:bg-slate-400 mb-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <BiHomeAlt className="text-3xl pt-2 text-gray-400 group-hover:text-white" />
            <h3 className="mt-2 text-lg font-medium text-white">Home</h3>
          </div>
          <div className="flex items-center pb-2 justify-start  gap-2   hover:bg-slate-400 mb-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <GiBinoculars className="text-3xl pt-2 text-gray-400 group-hover:text-white" />
            <h3 className="mt-2 text-lg font-medium text-white">Explore</h3>
          </div>
          <div className="flex  justify-start pb-2 items-center gap-2  hover:bg-slate-400 mb-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <BiCompass className="text-3xl pt-2 text-gray-400 group-hover:text-white" />
            <h3 className="mt-2 text-lg font-medium text-white">Discover</h3>
          </div>
          <div className="flex  justify-start pb-2 items-center gap-2  hover:bg-slate-400 mb-2  rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <HiOutlineMail className="text-3xl pt-2 text-gray-400 group-hover:text-white" />
            <h3 className="mt-2 text-lg font-medium text-white">Messages</h3>
          </div>
          <div className="flex  justify-start pb-2 items-center gap-2  hover:bg-slate-400 mb-2  rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <HiOutlineClipboardList className="text-3xl pt-2 text-gray-400 group-hover:text-white" />
            <h3 className="mt-2 text-lg font-medium text-white">List</h3>
          </div>
          <div className="flex  justify-start pb-2 items-center gap-2  hover:bg-slate-400 mb-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <HiOutlineBookmark className="text-3xl pt-2 text-gray-400 group-hover:text-white" />
            <h3 className="mt-2 text-lg font-medium text-white">BookMarks</h3>
          </div>
          <div className="flex  justify-start pb-2 items-center gap-2 hover:bg-slate-400 mb-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <RiBookLine className="text-3xl pt-2 text-gray-400 group-hover:text-white" />
            <h3 className="mt-2 text-lg font-medium text-white">Learn</h3>
          </div>
          <div className="flex  justify-start pb-2 items-center gap-2  hover:bg-slate-400 mb-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <HiOutlineBell className="text-3xl pt-2 text-gray-400 group-hover:text-white" />
            <h3 className="mt-2  text-xl font-medium text-white">
              Notifications
            </h3>
          </div>
          <div className="flex  justify-start pb-2 items-center gap-2  hover:bg-slate-400 mb-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <FiSettings className="text-3xl pt-2 text-gray-400 group-hover:text-white" />
            <h3 className="mt-2 text-lg font-medium text-white">Preferences</h3>
          </div>
          <div className="flex  justify-start pb-2 gap-2 items-center  hover:bg-slate-400 mb-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <GiBinoculars className="text-3xl pt-2 text-gray-400 group-hover:text-white" />
            <h3 className="mt-2 text-lg font-medium  text-white">
              NSFW filter
            </h3>
          </div>

          <button className="static bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full">
            <TbWriting className=" text-3xl inline-block px-1  text-white " />
            Make a Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
