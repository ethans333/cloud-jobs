import React from "react";
import logo from "../assets/logo.png";
import dash_icon from "../assets/igloo-solid.svg";
import jobs_icon from "../assets/suitcase-solid.svg";
import companies_icon from "../assets/building-solid.svg";
import profile_icon from "../assets/face-smile-solid.svg";

export default function Sidebar({ children }) {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-white rounded-r-lg shadow-lg p-5">
        <div className="">
          <p className="pt-2 text-gray-500 text-lg text-center mb-14">
            cloud careers.ai
          </p>
          <div className="text-left space-y-3 px-3 opacity-70">
            <div className="flex hover:opacity-50">
              <img src={dash_icon} className="w-4 mr-4" />
              <p className="cursor-pointer">Home</p>
            </div>
            <div className="flex hover:opacity-50">
              <img src={jobs_icon} className="w-4 mr-4" />
              <p className="cursor-pointer">Jobs</p>
            </div>
            <div className="flex hover:opacity-50">
              <img src={companies_icon} className="w-4 mr-4" />
              <p className="cursor-pointer">Companies</p>
            </div>
            <div className="flex hover:opacity-50">
              <img src={profile_icon} className="w-4 mr-4" />
              <p className="cursor-pointer">Profile</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow max-w-[1024px] mx-auto">{children}</div>
    </div>
  );
}
