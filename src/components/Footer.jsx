import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/ajay_j_d/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://x.com/Ajay_jdas" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/ajay-dheenadhayalan-762262260"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <div className="w-px h-6 bg-gray-500"></div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Ajay Dheenadhayalan 🩷. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;