"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const handleIsOpen = () => {
    let menuClicked = document.getElementById("menu");
    menuClicked.classList.toggle("hidden");
    menuClicked.classList.toggle("grid");
  };
  const handleIsClosed = () => {
    let navClick = document.getElementById("menu");
    navClick.classList.toggle("hidden");
    navClick.classList.toggle("grid");
  };

  return (
    <main className="mt-12 px-4 md:px-24 lg:px-40 xl:px-52">
      <div className="">
        <nav className=" lg:flex-wrap lg:flex lg:justify-between lg:items-center  font-sans text-xl">
          <div className=" flex justify-between ">
            <button id="menuBtn" className=" lg:hidden" onClick={handleIsOpen}>
              <Image src="/images/icon_hamburger-menu.svg" width={30} height={30} className=" cursor-pointer " alt="HamburgerMenu"></Image>
            </button>
            <Image className="hidden lg:block 2xl:w-64" src="/images/Logo.svg" width={200} height={200} alt="logo"></Image>
            <button className=" lg:hidden">
              <Image src="/images/Basket.svg" width={30} height={30} className=" items" alt="basketIcon"></Image>
            </button>
          </div>
          <ul id="menu" className="  pt-5  lg:flex lg:gap-14 lg:pt-0 hidden lg:text-2xl ">
            <Link href="/" onClick={handleIsClosed} className=" underline text-ll-primaryGreen navLink">
              Home
            </Link>
            <Link href="/about" onClick={handleIsClosed} className="navLink">
              About
            </Link>
            <Link href="/menu" onClick={handleIsClosed} className="navLink">
              Menu
            </Link>
            <Link href="/reservation" onClick={handleIsClosed} className="navLink">
              Reservation
            </Link>
            <Link href="/orderonline" onClick={handleIsClosed} className="navLink">
              Order Online
            </Link>
            <Link href="/login " onClick={handleIsClosed} className="navLink">
              Login
            </Link>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
