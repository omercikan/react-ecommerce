import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import { ToastContainer } from "react-toastify";

const MainLayout: React.FC = () => {
  return (
    <React.Fragment>
      <ToastContainer />

      <header className="main-header bg-[#161880] py-5 max-sm:py-3 fixed top-0 w-full z-20">
        <div className="container mx-auto max-sm:px-5">
          <Header />
        </div>
      </header>

      <main>
        <div>
          <Outlet />
        </div>

        <ShoppingCart />
      </main>
    </React.Fragment>
  );
};

export default MainLayout;
