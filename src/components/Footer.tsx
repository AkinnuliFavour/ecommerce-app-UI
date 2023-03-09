import {
  FaHouseUser,
  FaBox,
  FaCartPlus,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full py-4 px-6">
      <div className="flex justify-around w-full shadow-md shadow-black py-6 bg-blue-500 rounded-xl">
        <Link to="/">
          <FaHouseUser className="text-white" />
        </Link>
        <Link to="/categories">
          <FaBox className="text-white" />
        </Link>
        <Link to="/cart">
          <FaCartPlus className="text-white" />
        </Link>
        <Link to="/wish-list">
          <FaHeart className="text-white" />
        </Link>
        <Link to="/profile">
          <FaUser className="text-white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
