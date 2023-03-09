import React from "react";
import Header from "../components/Header";
import { FaAngleLeft, FaEllipsisH, FaPlus } from "react-icons/fa";
import man from "../assets/man_pic.jpg";
import shirt_2 from "../assets/shirt-2.jpg";
import shirt_3 from "../assets/shirt-3.jpg";
import shirt_4 from "../assets/shirt-4.jpg";
import shirt_5 from "../assets/shirt-5.jpg";
import Footer from "../components/Footer";

const WishList = () => {
  return (
    <main>
      <Header text="WishList" icon1={<FaAngleLeft />} icon2={<FaPlus />} />
      <main className="mt-8 shadow-sm shadow-black p-4 rounded-md rounded-t-2xl mb-20">
        <section className="flex items-center justify-between mt-4 py-2 border-b-2 border-zinc-300 border-solid">
          <div className="flex items-center">
            <img src={shirt_2} alt="" className="" />
            <div>
              <p className="ml-4">Clothing</p>
              <p className="ml-4 text-xs w-3/4 sm:w-full">A very nice shirt</p>
            </div>
          </div>
          <div className="bg-gray-200 shadow-md shadow-slate-200 p-3 rounded-full opacity-70 text-blue-500">
            <FaEllipsisH />
          </div>
        </section>
        <section className="flex items-center justify-between mt-4 py-2 border-b-2 border-zinc-300 border-solid">
          <div className="flex items-center">
            <img src={shirt_3} alt="" className="" />
            <div className="ml-4">
              <p className="">Clothing</p>
              <p className="text-xs w-3/4 sm:w-full">A very nice shirt</p>
              <p className="text-xs">$19</p>
              <p className="text-xs">Size: L</p>
              <p className="text-xs">Color: Black</p>
            </div>
          </div>
          <div className="bg-gray-200 shadow-md shadow-slate-200 p-3 rounded-full opacity-70 text-blue-500">
            <FaEllipsisH />
          </div>
        </section>
        <section className="flex items-center justify-between mt-4 py-2 border-b-2 border-zinc-300 border-solid">
          <div className="flex items-center">
            <img src={shirt_4} alt="" className="" />
            <div>
              <p className="ml-4">Clothing</p>
              <p className="ml-4 text-xs w-3/4 sm:w-full">
                A very nice shirt to wear out in the rain
              </p>
            </div>
          </div>
          <div className="bg-gray-200 shadow-md shadow-slate-200 p-3 rounded-full opacity-70 text-blue-500">
            <FaEllipsisH />
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
};

export default WishList;
