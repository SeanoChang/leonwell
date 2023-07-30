import { HiOutlineMail } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { BsTelephone } from "react-icons/ai";

const Footer = () => {
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
        <ul className="flex flex-row flex-wrap items-center mt-3 sm:mt-0 text-xs sm:text-base font-medium text-gray-800 ">
          <li>
            <p className="mr-4 text-2xl font-semibold">聯絡我們:</p>
          </li>
          <li className="flex flex-row items-center justify-center">
            <BsTelephone className="mr-1 text-xl" />
            <a href="tel:88636683597" className="mr-4 hover:underline md:mr-6">
              +886 3 668 3597
            </a>
          </li>
          <li className="flex flex-row items-center justify-center">
            <HiOutlineMail className="mr-1 text-xl" />
            <a
              href="mailto:info.5130@leonwell.com?subject=Feedback&body=Tell us anything..."
              className="mr-4 hover:underline md:mr-6"
            >
              Email
            </a>
          </li>
          <li className="flex flex-row items-center justify-center">
            <BiMessageRounded className="mr-1 text-xl" />
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
