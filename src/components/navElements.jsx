import React, { useEffect, useState } from "react";
import { FaHouse, FaFileLines, FaGear } from "react-icons/fa6";
import { FiPieChart } from "react-icons/fi";
import { BsChatText } from "react-icons/bs";
import Image from "next/image";
import person from "../assets/person.png";
import { RiLogoutCircleRLine } from "react-icons/ri";

const NavElements = (props) => {

  const navItems = [
    { className: "home", icon: <FaHouse size={20} className="mx-auto mt-2" /> },
    {
      className: "skill",
      icon: <FaFileLines size={20} className="mx-auto mt-2" />,
    },
    {
      className: "research",
      icon: <FiPieChart size={20} className="mx-auto mt-2" />,
    },
    {
      className: "link",
      icon: <BsChatText size={20} className="mx-auto mt-2" />,
    },
  ];

  const handleNavClick = (className) => {
    document.querySelector(".active")?.classList.remove("active");
    document.querySelector(`.${className}`).classList.add("active");
  };

  useEffect(() => {
    const navBg = document.querySelector(".navElements");
    if (window.innerWidth < 1024) {
      navBg.classList.add("background-navBar");
    } else {
      navBg.classList.remove("background-navBar");
    }
    document.querySelector(".home").classList.add("active");
  }, []);

  return (
    <ul
      className={`background-navBar navbar-padding navElements h-[${props.h}] flex flex-col items-center justify-center text-center gap-10`}
      ref={props.refs}
    >
      {navItems.map((item) => (
        <li key={item.className} className={`${item.className}`}>
          <a
            className="nav-elements text-underline-animation"
            href="#"
            onClick={() => handleNavClick(item.className)}
          >
            {item.icon}
          </a>
        </li>
      ))}
      {window.innerWidth < 1024 ? (
        <div className="flex flex-col gap-6 items-center">
          <div className="container">
            <Image
              src={person}
              height={0}
              width={0}
              objectFit="contain"
              layout="responsive"
              className="image-style"
              alt="logo"
            />
          </div>
          <RiLogoutCircleRLine
            className="cursor-pointer nav-elements"
            size={20}
          />
        </div>
      ) : (
        ""
      )}
    </ul>
  );
};

export default NavElements;
