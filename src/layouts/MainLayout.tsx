import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <React.Fragment>
      <header className="main-header bg-[#161880] py-5 fixed top-0 w-full">
        <div className="container mx-auto max-sm:px-5">
          <Header />
        </div>
      </header>

      <main>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainLayout;
