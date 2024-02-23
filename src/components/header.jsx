"use client";
import React, { useEffect, useState, useRef } from "react";
import NavBar from "./navBar";
import NavElements from "./navElements";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import logo from "../assets/logo.png";
import Image from "next/image";
import person from "../assets/person.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { getImage } from "@/apiCalls/fetchData";

const Header = () => {
  const styles = "sticky top-0 z-50 blur-background";
  const [showNavBar, setShowNavBar] = useState(false);
  const [styleNavBar, setStyleNavBar] = useState(
    window.innerWidth <= 1024 ? "" : styles
  );
  const [navAnimation, setNavAnimation] = useState("slide-in-done");
  const [image, setImage] = useState(logo);

  const ref = useRef();
  const handleNavBar = () => {
    if (showNavBar) {
      setNavAnimation("slide-out-done");
      setTimeout(() => {
        setShowNavBar(!showNavBar);
        setNavAnimation("slide-in-done");
      }, 600);
    } else {
      setShowNavBar(!showNavBar);
    }
  };

  useEffect(() => {
    getImage().then((res) => {
      if (res.data.success) {
        setImage(res.data.imageData.imageUrl);
      }
    })
  },[])

  useEffect(() => {
    if (showNavBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [setShowNavBar, showNavBar]);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1024) {
        setShowNavBar(false);
      }
      if (window.innerWidth <= 1024) {
        setStyleNavBar("");
      } else {
        setStyleNavBar(styles);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className={`navBar ${styleNavBar} my-5 mx-5 lg:my-[4rem] lg:mx-8`}>
      <div className="nav-animation flex justify-between items-center flex-row lg:flex-col">
        <Image
          src={image ? image : logo}
          height={0}
          width={0}
          objectFit="contain"
          layout="responsive"
          className="image-style"
          alt="logo"
        />
        {window.innerWidth >= 1024 ? (
          <div className="grid grid-cols-1 place-content-between h-[110vh] xl:h-[95vh] 2xl:h-[110vh]">
            <NavElements refs={ref} h={"full"} />
            <div className="flex flex-col gap-6 items-center">
              <div className="container">
                <Image
                  src={person}
                  height={0}
                  width={0}
                  objectFit="contain"
                  layout="responsive"
                  className="image-style mb-5"
                  alt="logo"
                />
              </div>
              <RiLogoutCircleRLine
                className="cursor-pointer nav-elements m-0 2xl:m-auto"
                size={20}
              />
            </div>
          </div>
        ) : !showNavBar ? (
          <FaBars
            className="cursor-pointer text-white"
            size={30}
            onClick={handleNavBar}
          />
        ) : (
          <FaXmark
            className="z-50 cursor-pointer text-white"
            size={35}
            onClick={handleNavBar}
          />
        )}
      </div>
      {showNavBar ? (
        <NavBar
          setShowNavBar={setShowNavBar}
          navAnimation={navAnimation}
          setNavAnimation={setNavAnimation}
        />
      ) : (
        ""
      )}
    </nav>
  );
};

export default Header;
