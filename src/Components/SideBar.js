import { React } from "react";
import PropTypes from "prop-types";
import { AiFillEnvironment } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

function SideBar({ open }) {
  const Menus = [
    { title: "Dashbaord" },
    { title: "Pages" },
    { title: "Media", spacing: true },
    {
      title: "Projects",
    },
  ];
  return (
    <div
      className={`bg-[#495579] p-4 pt-8 ${open ? "w-72" : "w-16"} duration-500`}
    >
      <div className="inline-flex">
        <AiFillEnvironment className="bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-3" />
        <h1 className="text-white origin-left font-medium text-2xl ">
          Tailwind
        </h1>
      </div>

      <div
        className={`flex items-center rounded-md bg-slate-500 mt-6 ${
          !open ? "px-1.5" : "px-4"
        } py-2`}
      >
        <BsSearch
          className={`text-white  text-xl block float-left cursor-pointer ${
            open && "mr-2"
          } `}
        />

        <input
          type={"search"}
          placeholder="Search"
          className={`text-base bg-transparent w-full text-white focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
