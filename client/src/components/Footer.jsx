import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 font-mono text-white py-8 flex flex-col justify-center items-center text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center my-10">
          <div className="mb-4 md:mb-0">
            <h3 className="text-3xl font-semibold mb-2">Subscribe</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white px-4 py-2 rounded-md w-full"
            />
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-4 flex lg:flex-row gap-12 flex-col justify-around">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Contacts</h3>
            <p>Address: 123 Street, City</p>
            <p>Phone: +1234567890</p>
            <p>Email: info@example.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Socials</h3>
            <ul className="flex justify-center">
              <li className="mr-4">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="my-1">
                <a href="/">Home</a>
              </li>
              <li className="my-1">
                <a href="/findadoctor">Services</a>
              </li>
              <li className="my-1">
                <a href="/apply">Doctor Enrollment</a>
              </li >
              <li className="my-1">
                <a href="/about">About</a>
              </li>
              <li className="my-1">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
