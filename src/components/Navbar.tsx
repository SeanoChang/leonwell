import logo from "../../images/logo.jpg";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  // state for show navbar in smaller devices
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="border-gray-200 bg-white w-full sticky top-0 z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Leonwell" className="w-32" />
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#introduction"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0"
              >
                首頁
              </a>
            </li>
            <li>
              <a
                href="#product"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0"
              >
                產品
              </a>
            </li>
            <li>
              <a
                href="#application"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0"
              >
                應用
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0"
              >
                聯絡
              </a>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <BiMenu className="text-3xl" onClick={() => setShowNav(!showNav)} />
          {
            showNav ? (
              <div className="absolute top-0 left-0 z-10 w-full h-screen bg-white" onClick={() => setShowNav(!showNav)}>
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
                  <li>
                    <a
                      href="#introduction"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      首頁
                    </a>
                  </li>
                  <li>
                    <a
                      href="#product"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      產品
                    </a>
                  </li>
                  <li>
                    <a
                      href="#application"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      應用
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      聯絡
                    </a>
                  </li>
                </ul>
              </div>
            ) : null
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
