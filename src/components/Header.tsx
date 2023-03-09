import React from "react";
import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";

type props = {
  text: string;
  icon1: any;
  icon2: any;
  children?: JSX.Element;
};

const Header = ({ text, icon1, icon2, children }: props) => {
  return (
    <header className="fixed top-0 w-full px-6 py-2 bg-blue-500">
      <div className="flex justify-between items-center w-full">
        <Link
          to="/"
          className="shadow-md shadow-zinc-400 p-3 rounded-md text-center text-blue-500 bg-white"
        >
          {icon1}
        </Link>
        <h2 className="text-white">{text}</h2>
        <div className="shadow-md shadow-zinc-400 p-3 rounded-md text-center text-blue-500 bg-white">
          {icon2}
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;
