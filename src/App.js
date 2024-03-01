import React from "react";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
// import Index from "./pages/index";
import ListProduct from "./pages/listProduct";
import News from "./pages/news";
import Pay from "./pages/pay";
import Product from "./pages/product";
import Home from "./pages/home";
import Infor from "./pages/infor";
import History from "./pages/history"
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/infor" element={<Infor />}  />
      <Route path="/history" element={<History />}  />
      <Route path="/cart" element={<Cart />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route path="/listProduct" element={<ListProduct />}  />
      <Route path="/news" element={<News />}  />
      <Route path="/pay" element={<Pay />}  />
      <Route path="/product" element={<Product />}  />
    </Routes>
    </BrowserRouter>
  )
}

export default App