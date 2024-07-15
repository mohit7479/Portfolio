import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#1C1B2E] to-sky-800 text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "40px" }} />
      </div>

      <ul className="hidden md:flex md:text-xs lg:text-sm">
        <li className="hover:text-[#8892b0] hover:scale-110 duration-500">
          <Link to="home" smooth={true} duration={500}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="hover:text-[#8892b0] hover:scale-110 duration-500">
          <Link to="about" smooth={true} duration={500}>
            {" "}
            About{" "}
          </Link>
        </li>
        <li className="hover:text-[#8892b0] hover:scale-110 duration-500">
          <Link to="skills" smooth={true} duration={500}>
            {" "}
            Skills{" "}
          </Link>
        </li>
        <li className="hover:text-[#8892b0] hover:scale-110 duration-500">
          <Link to="work" smooth={true} duration={500}>
            {" "}
            Work{" "}
          </Link>
        </li>
        <li className="hover:text-[#8892b0] hover:scale-110 duration-500">
          <Link to="experience" smooth={true} duration={500}>
            {" "}
            Experience{" "}
          </Link>
        </li>
        <li className="hover:text-[#8892b0] hover:scale-110 duration-500">
          <Link to="certificates" smooth={true} duration={500}>
            {" "}
            Certificates{" "}
          </Link>
        </li>
        <li className="hover:text-[#8892b0] hover:scale-110 duration-500">
          <Link to="contact" smooth={true} duration={500}>
            {" "}
            Contact{" "}
          </Link>
        </li>
      </ul>

      {/*Hamburger Button */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 right-0 w-75% h-75% opacity-90 rounded-xl font-bold font-mono m-auto bg-slate-900  text-gray-300 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {" "}
            About{" "}
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {" "}
            Skills{" "}
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            {" "}
            Work{" "}
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            {" "}
            Experience{" "}
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link
            onClick={handleClick}
            to="certificates"
            smooth={true}
            duration={500}
          >
            {" "}
            Certifications{" "}
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {" "}
            Contact{" "}
          </Link>
        </li>
      </ul>

      {/*Social Button */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[30px] lg:h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mohit-kumar-b77b69281/"
              target="blank"
            >
              LinkedIn
              <FaLinkedin
                size={30}
                className="mr-[-10px] lg:mr-0 duration-300"
              />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[30px] lg:h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.github.com/mohit7479"
              target="blank"
            >
              Github
              <FaGithub size={30} className="mr-[-10px] lg:mr-0 duration-300" />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[30px] lg:h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:mohit7479936440@gmail.com"
            >
              E-mail
              <HiOutlineMail
                size={30}
                className="mr-[-10px] lg:mr-0 duration-300"
              />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[30px] lg:h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1KLUnsBzu9jlx5cErk2dPeqcr2-481KSK/view?usp=drive_link"
              target="blank"
            >
              Resume
              <BsFillPersonLinesFill
                size={30}
                className="mr-[-10px] lg:mr-0 duration-300"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
