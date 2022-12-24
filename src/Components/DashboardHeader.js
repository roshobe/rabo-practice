import React from "react";
import { HiMenu } from "react-icons/hi";

function DashboardHeader() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-row items-center justify-between px-6">
        <HiMenu className="text-gray-200 w-12 h-12 py-1 px-1  " />
        <div className="flex flex-row items-center justify-between">
          <ul className="flex pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <button
                className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                href="#"
              >
                Dashboard
              </button>
            </li>
            <li className="nav-item p-2">
              <button
                className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                href="#"
              >
                Team
              </button>
            </li>
            <li className="nav-item p-2">
              <button
                className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                href="#"
              >
                Projects
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DashboardHeader;
