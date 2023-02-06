import React from "react";
import logo from "../../Assets/logo.png";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-slate-700 ">
      <div>
        <img src={logo} alt="logo" className="w-48 " />
        <p className="font-bold text-2xl font-serif">
          Write better, Write smarter
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a
            href="https://github.com/HasanC14"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://www.facebook.com/hasan.chowdhuryD/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            href="https://www.linkedin.com/in/hasanchowdhuryd/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
