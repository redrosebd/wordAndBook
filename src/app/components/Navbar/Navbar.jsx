"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaShare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div className="bg-[#075F8F] p-2  z-10 lg:my-1 lg:rounded">
      {/* ----------------Nav Items For Big Screen ---------- */}
      <div className="hidden lg:flex justify-between items-center">
        <div>
          <ul className="flex items-end gap-2   text-white ">
            <li>Book Name: </li>
            <li className="text-xl font-bold"> <span className="text-[#FBE050]">দূর্বলদের</span> Fast Learning English <span className="text-[#FBE050]">Part - I</span></li>
            
          </ul>
        </div>

        <div className="flex items-center gap-10">
           
           <div className="text-white text-xl flex gap-3">
              <span title="Share with"><FaShare/></span>
             <a href="#"><FaFacebookSquare/> </a>
             <a href="#"><FaInstagramSquare/> </a>
             <a href="#"><FaLinkedin/> </a>
             <a href="#"><FaTwitterSquare/> </a>
           </div>

           <div>
             <h2 className="font-bold text-white text-xl">RedRose Ebook</h2>
           </div>
        </div>
      </div>

      {/* -----------------Nav Items for small Screen--------------- */}
      <div className="flex lg:hidden justify-between items-center relative">
        <div>
          <h2 className="font-bold text-white text-lg">RedRose Ebook</h2>
        </div>

        <div onClick={() => setMenuClicked(!menuClicked)}>
          {menuClicked ? (
            <RxCross2 className="font-bold text-3xl text-white" />
          ) : (
            <IoMenu className="font-bold text-3xl text-white" />
          )}
        </div>
      </div>

      <div
        className={`${
          menuClicked ? "block" : "hidden"
        } lg:hidden min-w-32 min-h-40 bg-[#075f8fde] absolute right-[10px] top-12 rounded-lg shadow-2xl z-20`}
      >
        <ul className=" text-white p-4">
          <li>Book One</li>
          <li>Book Two</li>
          <li>Book Three</li>
          <li>Book Four</li>
          <li>Book Five</li>
          <li>Book Six</li>
          <li>Book Seven</li>
        </ul>
      </div>
    </div>
  );
}
