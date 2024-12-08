"use client";
import React from "react";
import { GoHeartFill } from "react-icons/go";
import { TbBellFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import filter from "@/app/components/images/filter.png";
import profile from "@/app/components/images/Profil.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 lg:px-20 py-4 bg-white shadow-md" style={{ height: "124px" }}>
      {/* Logo */}
      <div className="text-3xl font-bold text-blue-600">MORENT</div>

      {/* Search */}
      <div className="hidden lg:flex items-center w-full max-w-lg border px-4 py-2 rounded-full">
        <span className="text-gray-600 px-4">
          <CiSearch size={28} />
        </span>
        <input
          type="text"
          placeholder="Search something here"
          className="flex-grow bg-transparent outline-none"
        />
        <button className="text-gray-500">
          <i className="fas fa-filter"></i>
        </button>
        {/* Filter */}
        <Image src={filter} alt="Filter" />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 text-gray-500 justify-center">
        <span className="border rounded-full p-2">
          <GoHeartFill size={20} />
        </span>
        <span className="relative border rounded-full p-2">
          <span className="border rounded-full w-3 h-3 absolute -top-1 left-5 bg-red-500"></span>
          <TbBellFilled size={20} />
        </span>
        <span className="border rounded-full p-2">
          <IoMdSettings size={20} />
        </span>
        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
          <Image
            src={profile}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
