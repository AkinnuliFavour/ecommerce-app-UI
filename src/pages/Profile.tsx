import React from "react";
import {
  FaEllipsisH,
  FaAngleLeft,
  FaBell,
  FaCalendarAlt,
  FaAngleRight,
  FaAddressBook,
  FaCreditCard,
  FaHeart,
  FaCog,
} from "react-icons/fa";
import Header from "../components/Header";
import man from "../assets/man_pic.jpg";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <main>
      <Header
        text="Hi, Jasmine!"
        icon1={<FaAngleLeft />}
        icon2={<FaEllipsisH />}
      />
      <figure className="mt-20 flex flex-col justify-center items-center">
        <img src={man} alt="" className="rounded-full w-1/6" />
        <figcaption className="mt-3 text-2xl font-bold">
          Jasmine Hampton
        </figcaption>
      </figure>
      <main className="mt-8 shadow-sm shadow-black p-4 rounded-md mb-24">
        <section className="flex items-center justify-between mt-4 py-2 border-b border-zinc-200 border-solid">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaBell className="text-white" />
            </div>
            <p className="ml-4">Clothing</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
        <section className="flex items-center justify-between mt-8 py-2 border-b border-zinc-200 border-solid">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaCalendarAlt className="text-white" />
            </div>
            <p className="ml-4">My Orders</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
        <section className="flex items-center justify-between mt-8 py-2 border-b border-zinc-200 border-solid">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaAddressBook className="text-white" />
            </div>
            <p className="ml-4">Addresses</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
        <section className="flex items-center justify-between mt-8 py-2 border-b border-zinc-200 border-solid">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaCreditCard className="text-white" />
            </div>
            <p className="ml-4">Payment</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
        <section className="flex items-center justify-between mt-8 py-2 border-b border-zinc-200 border-solid">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaHeart className="text-white" />
            </div>
            <p className="ml-4">WishList</p>
          </div>
          <div className="p-3 border border-solid border-blue-500 rounded-xl text-blue-500">
            <FaAngleRight />
          </div>
        </section>
        <section className="flex items-center justify-between mt-8 py-2 border-b border-zinc-200 border-solid">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-xl">
              <FaCog className="text-white" />
            </div>
            <p className="ml-4">Settings</p>
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

export default Profile;
