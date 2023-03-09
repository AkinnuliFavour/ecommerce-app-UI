import React from "react";
import {
  FaArrowLeft,
  FaCamera,
  FaTshirt,
  FaAngleRight,
  FaSocks,
  FaCrown,
  FaOilCan,
  FaBaby,
  FaBook,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Categories = () => {
  return (
    <main className="py-4 mb-20">
      <Header text="Categories" icon1={<FaArrowLeft />} icon2={<FaCamera />} />
      <section className="mt-20">
        <form action="" className="w-full flex justify-center">
          <input
            type="search"
            name=""
            id=""
            className="border-b-2 border-stone-300 w-3/4 outline-none text-center"
            placeholder="Search"
          />
        </form>
      </section>
      <nav className="mt-12 flex justify-between md:justify-evenly px-4">
        <h3 className="focus:shadow-md focus:shadow-zinc-400 focus:py-2 focus:px-6 focus:rounded-md focus:text-center hover:shadow-md hover:shadow-zinc-400 hover:py-2 hover:px-6 hover:rounded-md hover:text-center bg-white">
          Men
        </h3>
        <h3 className="shadow-md shadow-zinc-400 py-2 px-6 rounded-md text-center bg-white">
          Women
        </h3>
        <h3 className="focus:shadow-md focus:shadow-zinc-400 focus:py-2 focus:px-6 focus:rounded-md focus:text-center hover:shadow-md hover:shadow-zinc-400 hover:py-2 hover:px-6 hover:rounded-md hover:text-center bg-white">
          Kids
        </h3>
      </nav>
      <main className="mt-8 shadow-sm shadow-black p-4 rounded-md">
        <section className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaTshirt className="text-white" />
            </div>
            <p className="ml-4">Clothing</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
        <section className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaSocks className="text-white" />
            </div>
            <p className="ml-4">Shoes</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
        <section className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaCrown className="text-white" />
            </div>
            <p className="ml-4">Accessories</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
        <section className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaOilCan className="text-white" />
            </div>
            <p className="ml-4">Beauty&Health</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
        <section className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaBaby className="text-white" />
            </div>
            <p className="ml-4">Toys</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
        <section className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaBook className="text-white" />
            </div>
            <p className="ml-4">Books</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
};

export default Categories;
