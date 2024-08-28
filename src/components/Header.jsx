import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full shadow-lg h-16 flex items-center justify-between px-4 py-2 bg-primary ">
      {/* logo */}
      <Link to={"/"} className="w-6 sm:w-9 gap-2 flex items-center ">
        <img src="./logo.svg" alt="Logo" />
        <span className="text-xl  sm:text-2xl  font-semibold text-white">ResuCraft</span>
      </Link>
      {/* signin  */}
      <Link to={"/auth/signin"}>
        <Button variant="outline">SignIn</Button>
      </Link>
    </nav>
  );
};

export default Header;
