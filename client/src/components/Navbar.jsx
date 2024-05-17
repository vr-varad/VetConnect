import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-around items-center py-8">
      <div className="flex flex-row items-end gap-2">
        <i
          class="fa-solid fa-shield-dog fa-4x"
          style={{ color: "#1919a3" }}
        ></i>
        <h1 className="font-mono text-3xl font-semibold">VetConnect</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-14 mx-10 justify-center items-center ">
        <a
          href="/"
          className="hidden lg:block text-slate-400 hover:text-blue-600 hover:scale-110"
        >
          Home
        </a>
        <a
          href="/findaDoctor"
          className="hidden lg:block text-slate-400 hover:text-blue-600 hover:scale-110"
        >
          Doctor
        </a>
        <a
          href="/apply"
          className="hidden lg:block text-slate-400 hover:text-blue-600 hover:scale-110"
        >
          Doctor Enrollment
        </a>
        <a
          href="/about"
          className="hidden lg:block text-slate-400 hover:text-blue-600 hover:scale-110"
        >
          About
        </a>
        <a
          href="/contact"
          className="hidden lg:block text-slate-400 hover:text-blue-600 hover:scale-110"
        >
          Contact
        </a>
      </div>
      {user ? <div className="flex flex-row  gap-10 justify-center items-center">
        <button
          onClick={() => {
            navigate("/book");
          }}
          className=" bg-blue-600 text-white py-4 px-10 rounded-lg hover:bg-blue-950 mt-4 lg:mt-0 hidden md:block"
        >
          Book An Appointment
        </button>
        <div className="flex flex-col justify-center items-center gap-3">
        <i class="fa-solid fa-user fa-2x"></i>
        <Link to={'/profile'} className="font-bold font-mono text-md">{user?.name ? user?.name : "Profile"}</Link>
        </div>
      </div> : <button
          onClick={() => {
            navigate("/login");
          }}
          className=" bg-blue-600 text-white py-4 px-10 rounded-lg hover:bg-blue-950 mt-4 lg:mt-0 hidden md:block"
        >
          Login
        </button>}
    </div>
  );
};

export default Navbar;
