import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex mt-20 justify-around sticky top-20">
      <Link
        to="/all"
        className="shadow-md shadow-zinc-400 py-2 px-6 rounded-md text-center text-blue-500 bg-white"
      >
        All
      </Link>
      <Link
        to="/mens-category"
        className="shadow-md shadow-zinc-400 py-2 px-6 rounded-md text-center text-blue-500 bg-white"
      >
        Men
      </Link>
      <Link
        to="/women's-category"
        className="shadow-md shadow-zinc-400 py-2 px-6 rounded-md text-center text-blue-500 bg-white"
      >
        Women
      </Link>
      <Link
        to="/kids-category"
        className="shadow-md shadow-zinc-400 py-2 px-6 rounded-md text-center text-blue-500 bg-white"
      >
        Kids
      </Link>
    </nav>
  );
};

export default Nav;
