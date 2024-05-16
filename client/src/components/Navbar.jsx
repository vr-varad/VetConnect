import React from "react";

const Navbar = () => {
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
        <div className="lg:hidden relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="/"
          >
            <option value="/">Home</option>
            <option value="/findaDoctor">Find A Doctor</option>
            <option value="/apply">Doctor Enrollment</option>
            <option value="/about">About</option>
            <option value="/contact">Contact</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 8.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zM10 16a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
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
          Find A Doctor
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
      <button className=" bg-blue-600 text-white py-4 px-10 rounded-lg hover:bg-blue-950 mt-4 lg:mt-0 hidden sm:block">
        Book An Appointment
      </button>
    </div>
  );
};

export default Navbar;
