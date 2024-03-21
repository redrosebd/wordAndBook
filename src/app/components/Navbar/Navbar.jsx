import React from "react";

export default function Navbar() {
  return (
    <div className="bg-blue-400 p-2 ">
      <div className="hidden lg:flex justify-between items-center">
        <div>
          <ul className="flex gap-6   text-white ">
            <li>Book One |</li>
            <li>Book Two |</li>
            <li>Book Three |</li>
            <li>Book Four |</li>
            <li>Book Five |</li>
            <li>Book Six |</li>
            <li>Book Seven </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-white text-xl">RedRose Ebook</h2>
        </div>
      </div>
    </div>
  );
}
