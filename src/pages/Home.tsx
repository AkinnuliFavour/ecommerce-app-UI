import React from "react";
import {
  FaAngleLeft,
  FaSearch,
  FaStopwatch,
  FaArrowRight,
  FaGift,
  FaStar,
} from "react-icons/fa";
import man from "../assets/man_pic.jpg";
import poster from "../assets/home_image.jpg";
import shirt_1 from "../assets/shirt-1.jpg";
import shirt_2 from "../assets/shirt-2.jpg";
import shirt_3 from "../assets/shirt-3.jpg";
import shirt_4 from "../assets/shirt-4.jpg";
import shirt_5 from "../assets/shirt-5.jpg";
import shirt_6 from "../assets/shirt-6.jpg";
import shirt_7 from "../assets/shirt-7.jpg";
import shoe_1 from "../assets/shoe_1.jpg";
import shoe_2 from "../assets/shoe-2.jpg";
import shoe_3 from "../assets/shoe-3.jpg";
import shoe_4 from "../assets/shoe-4.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <main className="mb-20">
      <Header
        text="Hi, Jasmine!"
        icon1={<FaAngleLeft />}
        icon2={<FaSearch />}
      />
      <Nav />
      <main className="mt-12 mb-20 p-2 md:p-8">
        <section>
          <img src={poster} alt="" className="w-full rounded-xl" />
        </section>
        <section className="mt-8 flex justify-between px-4">
          <div className="flex items-center">
            <div className="bg-blue-500 p-4 rounded-xl">
              <FaStopwatch className="text-white" />
            </div>
            <h3 className="ml-4">New Arrivals</h3>
          </div>
          <div className="p-4 border border-solid border-blue-500 rounded-xl">
            <FaArrowRight className="text-blue-500" />
          </div>
        </section>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <img src={shirt_1} alt="" className="w-full" />
            <h4>GUCCI</h4>
            <h4>Cotton Jacket</h4>
            <p>$19</p>
          </div>
          <div>
            <img src={shirt_3} alt="" className="w-full" />
            <h4>GUCCI</h4>
            <h4>Cotton Jacket</h4>
            <p>$19</p>
          </div>
          <div>
            <img src={shirt_4} alt="" className="w-full" />
            <h4>GUCCI</h4>
            <h4>Cotton Jacket</h4>
            <p>$19</p>
          </div>
          <div>
            <img src={shirt_5} alt="" className="w-full" />
            <h4>GUCCI</h4>
            <h4>Cotton Jacket</h4>
            <p>$19</p>
          </div>
        </section>
        <section className="mt-6">
          <div className="flex justify-between items-center bg-blue-500 p-6 rounded-xl">
            <FaGift className="text-xl text-white" />
            <div className="text-center">
              <h4>Free Shipping over $42</h4>
              <p>Try now for free</p>
            </div>
            <FaGift className="text-xl text-white" />
          </div>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <img src={shirt_2} alt="" className="w-full" />
              <h4>GUCCI</h4>
              <h4>Cotton Jacket</h4>
              <p>$19</p>
            </div>
            <div>
              <img src={shirt_3} alt="" className="w-full" />
              <h4>GUCCI</h4>
              <h4>Cotton Jacket</h4>
              <p>$19</p>
            </div>
            <div>
              <img src={shirt_6} alt="" className="w-full" />
              <h4>GUCCI</h4>
              <h4>Cotton Jacket</h4>
              <p>$19</p>
            </div>
            <div>
              <img src={shirt_7} alt="" className="w-full" />
              <h4>GUCCI</h4>
              <h4>Cotton Jacket</h4>
              <p>$19</p>
            </div>
          </section>
        </section>
        <section className="mt-8 flex justify-between">
          <div className="flex items-center">
            <div className="bg-blue-500 p-4 rounded-xl">
              <FaStar className="text-white" />
            </div>
            <h3 className="ml-4">Most Popular</h3>
          </div>
          <div className="p-4 border border-solid border-blue-500 rounded-xl">
            <FaArrowRight className="text-blue-500" />
          </div>
        </section>
        <section className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <img src={shoe_1} alt="" className="w-full" />
            <h4>Addidas</h4>
            <h4>Performance Sport Shoes Kids Altarun K</h4>
            <p>$10</p>
          </div>
          <div>
            <img src={shoe_2} alt="" className="w-full" />
            <h4>Addidas</h4>
            <h4>Performance Sport Shoes Kids Altarun K</h4>
            <p>$10</p>
          </div>
          <div>
            <img src={shoe_3} alt="" className="w-full" />
            <h4>Addidas</h4>
            <h4>Performance Sport Shoes Kids Altarun K</h4>
            <p>$10</p>
          </div>
          <div>
            <img src={shoe_4} alt="" className="w-full" />
            <h4>Addidas</h4>
            <h4>Performance Sport Shoes Kids Altarun K</h4>
            <p>$10</p>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
};

export default Home;
