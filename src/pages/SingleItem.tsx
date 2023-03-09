import React from "react";
import Header from "../components/Header";
import {
  FaAngleLeft,
  FaArrowsAltV,
  FaBookOpen,
  FaHeart,
  FaMinus,
  FaShip,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import shoe_1 from "../assets/shoe_1.jpg";
import Footer from "../components/Footer";

const SingleItem = () => {
  return (
    <main>
      <Header text="Hi, Jasmine!" icon1={<FaAngleLeft />} icon2={<FaHeart />} />
      <figure className="md:flex md:items-center md:justify-center">
        <img src={shoe_1} alt="" className="w-full md:w-1/2 xl:w-1/4" />
        <figcaption className="absolute -left-60">Addidas</figcaption>
      </figure>
      <section className="grid grid-cols-2 text-center px-8 bg-blue-500 text-white">
        <p className="text-left">Addiddas</p>
        <p className="text-right">$290</p>
        <p className="text-left">Men Trend Casual Sneakers</p>
        <p className="line-through text-right">$500</p>
      </section>
      <article className="mt-6 px-4">
        Deear customer, Welcome to our store, our store will provide you with
        quality economic products, we believe you will like it very much. In
        order to choose a size that is more suitable for you, please check our
        size chart carefully. And determine the size according to your foot
        length.If your feet are wider, choose shoes that are one size larger
        than usual.Size reference (our shoes are Chinese / EU size)EU size 38 =
        China size 39 = foot length 24.5 cm.EU size 39 = China size 40 = foot
        length 25 cm.
      </article>
      <section className="flex justify-between px-4 mt-4">
        <div className="flex gap-2 items-center">
          <div className="p-3 rounded-md bg-yellow-500">
            <FaStar className="text-white" />
          </div>
          <p>4.9</p>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-xl px-5 py-2 border border-solid border-blue-500 text-center rounded-md">
            -
          </button>
          <p>3</p>
          <button className="text-xl px-5 py-2 border border-solid border-blue-500 text-center rounded-md">
            +
          </button>
        </div>
      </section>
      <section className="p-4">
        <button className="flex items-center bg-blue-500 w-full justify-center p-2 rounded-lg text-white">
          <FaShoppingCart className="mr-2" /> Add to Cart
        </button>
      </section>
      <section className="flex items-center justify-between mt-4 py-2 border-b-2 border-zinc-300 border-solid px-4">
        <div className="flex items-center">
          <div className="bg-blue-500 p-2 rounded-xl text-white mr-2">
            <FaArrowsAltV />
          </div>
          <p>Details</p>
        </div>
        <div className="p-2 border border-solid border-blue-500 rounded-xl text-blue-500">
          <FaMinus />
        </div>
      </section>
      <section className="flex items-center justify-between mt-4 py-2 border-b-2 border-zinc-300 border-solid px-4">
        <div className="flex items-center">
          <div className="bg-blue-500 p-2 rounded-xl text-white mr-2">
            <FaBookOpen />
          </div>
          <p>About Brand</p>
        </div>
        <div className="p-2 border border-solid border-blue-500 rounded-xl text-blue-500">
          <FaMinus />
        </div>
      </section>
      <section className="flex items-center justify-between mt-4 py-2 border-b-2 border-zinc-300 border-solid px-4 mb-24">
        <div className="flex items-center">
          <div className="bg-blue-500 p-2 rounded-xl text-white mr-2">
            <FaShip />
          </div>
          <p>Shipping</p>
        </div>
        <div className="p-2 border border-solid border-blue-500 rounded-xl text-blue-500">
          <FaMinus />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SingleItem;
