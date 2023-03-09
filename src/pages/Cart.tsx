import React from "react";
import Header from "../components/Header";
import { FaAngleLeft, FaEllipsisH } from "react-icons/fa";
import man from "../assets/man_pic.jpg";
import shirt_3 from "../assets/shirt-3.jpg";
import shirt_4 from "../assets/shirt-4.jpg";
import shirt_5 from "../assets/shirt-5.jpg";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <main className="mb-20">
      <Header
        text="Shopping Cart"
        icon1={<FaAngleLeft />}
        icon2={<FaEllipsisH />}
      />
      <main className="mt-8 shadow-sm shadow-black p-4 rounded-md rounded-t-2xl">
        <section className="flex items-center justify-between mt-4 py-2 border-b-2 border-zinc-300 border-solid">
          <div className="flex items-center">
            <img src={shirt_3} alt="" className="" />
            <div>
              <p className="ml-4">Clothing</p>
              <p className="ml-4 text-xs w-3/4 sm:w-full">A very nice shirt</p>
            </div>
          </div>
          <p>$19</p>
        </section>
        <section className="flex items-center justify-between mt-4 py-2 border-b-2 border-zinc-300 border-solid">
          <div className="flex items-center">
            <img src={shirt_4} alt="" className="" />
            <div>
              <p className="ml-4">Clothing</p>
              <p className="ml-4 text-xs w-3/4 sm:w-full">A very nice shirt</p>
            </div>
          </div>
          <p>$19</p>
        </section>
        <section className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img src={shirt_5} alt="" className="" />
            <div>
              <p className="ml-4">Clothing</p>
              <p className="ml-4 text-xs w-3/4 sm:w-full">
                A very nice shirt to wear out in the rain
              </p>
            </div>
          </div>
          <p>$19</p>
        </section>
      </main>
      <Footer />
    </main>
  );
};

export default Cart;
