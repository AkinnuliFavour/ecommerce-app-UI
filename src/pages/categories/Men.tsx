import React from "react";
import Header from "../../components/Header";
import { FaAngleLeft, FaCamera } from "react-icons/fa";
import shirt_1 from "../../assets/shirt-1.jpg";
import shirt_2 from "../../assets/shirt-2.jpg";
import shirt_3 from "../../assets/shirt-3.jpg";
import shirt_4 from "../../assets/shirt-4.jpg";
import shirt_5 from "../../assets/shirt-5.jpg";
import shirt_6 from "../../assets/shirt-6.jpg";
import shirt_7 from "../../assets/shirt-7.jpg";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const Men = () => {
  return (
    <main className="mb-20">
      <Header
        text="Men's Category"
        icon1={<FaAngleLeft />}
        icon2={<FaCamera />}
      />
      <Nav />
      <section className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-6 p-4">
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
      <Footer />
    </main>
  );
};

export default Men;
