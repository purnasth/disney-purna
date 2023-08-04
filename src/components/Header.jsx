import React from "react";
import logo from "./../assets/images/logo.png";
import user from "./../assets/images/purna.webp";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = React.useState(false);

  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Watchlist",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "Series",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex justify-between p-2 bg-gradient-to-t from-[--tmdbDarkBlue] to-[--darkBg] sticky top-0 z-50">
      <div className="flex gap-8">
        <img
          src={logo}
          alt="logo"
          className="w-28 md:w-40 object-cover p-4 cursor-pointer"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-2">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}

          <div className="md:hidden flex" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute top-24 left-1/2 bg-[--tmdbDarkBlue] p-3 border-[1px] border-gray-700 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <HeaderItem
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <a
        href="https://www.purnashrestha.com.np/"
        className="cursor-pointer my-auto"
        target="_blank"
      >
        <img
          src={user}
          alt="User's Picture"
          className="w-10 h-10 rounded-full object-cover m-5 hover:border-2 hover:border-white transition-all duration-100 ease-in-out"
        />
      </a>
    </div>
  );
}

export default Header;
