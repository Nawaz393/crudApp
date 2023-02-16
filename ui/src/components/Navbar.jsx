import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex  h-10 bg-slate-800 text-gray-400 font-bold w-full justify-between items-center px-5 shadow-sm shadow-black">
      <div>
        <h1>Mongo Crud</h1>
      </div>

      <div className="flex ">
        <Link to="/" className="px-2">
          Home
        </Link>
        <Link to="/add" className="px-2">
          Add New Record
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
