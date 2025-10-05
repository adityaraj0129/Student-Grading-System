import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          Student Grade Management System
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Home
          </Link>
          <Link
            to="/addstudent"
            className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Add Student
          </Link>
          <Link
            to="/addgrades"
            className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Add Grade
          </Link>
          <Link
            to="/report"
            className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Report
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
