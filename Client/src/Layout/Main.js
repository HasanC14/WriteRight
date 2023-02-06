import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar></Navbar>

      <Outlet></Outlet>
      <div className="mt-24">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
