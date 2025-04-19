//  npm i react-scroll  >>> it is for NavLink

import { Link as LinkScroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import xora from "../assets/images/xora.svg";
import magic from "../assets/images/magic.svg";
import close from "../assets/images/close.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // ---------------------------------------------------------------------

  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      // to optimize performance
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // ---------------------------------------------------------------------

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5 "
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4 
        ${hasScrolled ? "py-2 bg-black-100 backdrop-blure-[8px] " : ""} `}
    >
      <div className="container flex h-14 items-center max-lg:px-5 ">
        <a className="lg:hidden flex flex-1 cursor-pointer z-100">
          <img src={xora} width={115} height={55} alt="xora logo" />
        </a>
        <div
          className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 
            ${isOpen ? " max-lg:opacity-100" : "max-lg:pointer-events-none "}`}
        >
          <div className=" max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-lg:px-4 ">
            <nav className=" max-lg:relative max-lg:z-2 max-lg:my-auto ">
              <ul className=" flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <img src={xora} width={160} height={55} alt="logo" />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[360px] translate-x-[-290px] -translate-y-1/2 rotate-90 ">
              <img
                src="../assets/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="../assets/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen((prevState) => !prevState)} // toggle logic
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
        >
          <img
            src={`  ${isOpen ? close : magic} `}
            alt="logo"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
}
