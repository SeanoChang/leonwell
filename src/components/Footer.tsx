import { useState } from "react";

const Footer = () => {
  // state for en or cn address
  const [address, setAddress] = useState(true);

  return (
    <footer className="bg-gray-50 p-4" id="contact">
      <div className="w-full mx-auto max-w-screen-xl p-5 bg-slate-200 rounded-lg shadow-md shadow-gray-300 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-centertext-gray-400">
          © 2023{" "}
          <a href="" className="hover:underline">
            Leonwell
          </a>
          .
        </span>
        <ul className="flex flex-row flex-wrap items-center mt-3 text-xs sm:text-base font-medium text-gray-800 sm:mt-0">
          <li className="mr-4 block sm:inline-block md:mr-6 hover:underline hover:cursor-pointer" onClick={() => setAddress(!address)}>
            {address
              ? "310021 新竹縣竹東鎮員山路266-2號"
              : "No.266-2, Yuanshan Rd., Zhudong Township, Hsinchu County 310021, Taiwan (R.O.C.)"}
          </li>
          <li>
            <a href="tel:88636683597" className="mr-4 hover:underline md:mr-6">
              +886 3 668 3597
            </a>
          </li>
          <li>
            <a
              href="mailto:info.5130@leonwell.com?subject=Feedback&body=Tell us anything..."
              className="mr-4 hover:underline md:mr-6"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://line.me/ti/p/@pump666"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
            >
              Line
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
