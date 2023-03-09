import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import All from "./pages/categories/All";
import Kids from "./pages/categories/Kids";
import Men from "./pages/categories/Men";
import Women from "./pages/categories/Women";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SingleItem from "./pages/SingleItem";
import WishList from "./pages/WishList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/single-item" element={<SingleItem />} />
        <Route path="/mens-category" element={<Men />} />
        <Route path="/women's-category" element={<Women />} />
        <Route path="/kids-category" element={<Kids />} />
        <Route path="/all" element={<All />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
