// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showStatus, setShowStatus] = useState(false);
  return (
    <nav className="top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-blue-950 px-6 py-4 shadow-sm">
      {/* Logo */}
      <div className=" flex gap-1 text-2xl font-semibold font-sans tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        <img src="/image.png" className="h-9 w-10 object-contain" />
        <h1>My Task Manager</h1>
      </div>

      {/* Navigation*/}
      <div className="flex items-center justify-center gap-5">
        <Link
          to="/"
          className="font-medium text-amber-50 text-sm hover:text-blue-800 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/create"
          className="font-medium text-amber-50 text-sm hover:text-blue-800 transition"
        >
          Create Task
        </Link>

        <div className="relative">
          <Link
            onClick={(e) => {
              e.preventDefault();
              setShowStatus(!showStatus);
            }}
            className="flex cursor-pointer items-center gap-1 text-sm font-medium text-amber-50 hover:text-blue-300"
          >
            Task Status
            <span className="text-[8px] flex items-end justify-end translate-y-0.5 ">
              {showStatus ? "▲" : "▼"}
            </span>
          </Link>

          {showStatus && (
            <div className="absolute left-0 top-5 z-50 mt-1 w-30 rounded-lg bg-white py-0 shadow-lg">
              <Link
                to="/completed"
                className="block px-2 py-1 text-sm text-gray-700 rounded-t-lg hover:bg-gray-100"
              >
                Completed Task
              </Link>

              <Link
                to="/pending"
                className="block px-2 py-1 text-sm text-gray-700 rounded-b-lg hover:bg-gray-100"
              >
                Pending Task
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Profile */}
      <div className="text-xl rounded-full border bg-emerald-500 border-4 size-10 flex items-center justify-center ">
        YK
      </div>
    </nav>
  );
};

export default Navbar;
