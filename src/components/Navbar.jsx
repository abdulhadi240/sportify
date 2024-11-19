import Image from "next/image";
import React from "react";

const navbarItems = [
  {
    title: "Home",
  },
  {
    title: "About",
  },
  {
    title: "Event",
  },
  {
    title: "Gallery",
  },
  {
    title: "Contact",
  },
];

export default function Navbar() {
  return (
    <div className="navbar flex justify-between items-center mx-6 mt-3">
      <div className="">
  <img
    src="/Sportefy3.png"
    alt="logo"
  />
</div>
      <div className="menu flex gap-8 items-center">
        {navbarItems.map((menu, index) => {
          return (
            <div key={index} className="menu-item">
              {index === 0 ? (
                <div className="text-primary">
                  {menu.title}
                </div>
              ) : (
                <div>
                  {menu.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="button flex gap-4 items-center">
        <button className="h-auto w-auto p-2 bg-transparent text-black">Login</button>
        <button className="h-auto w-auto py-1 bg-primary text-white rounded-full px-6">Register</button>
      </div>
    </div>
  );
}
