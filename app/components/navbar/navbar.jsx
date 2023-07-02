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
    <main className="mt-12 px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">
      <div className="">
        <nav className=" font-sans text-xl xl:flex xl:flex-wrap  xl:items-center xl:justify-between">
          <div className=" flex justify-between ">
            <button id="menuBtn" className=" xl:hidden" onClick={handleIsOpen}>
              <Image
                src="/images/icon_hamburger-menu.svg"
                width={30}
                height={30}
                className=" h-8 w-8 cursor-pointer"
                alt="HamburgerMenu"
                priority={true}
              ></Image>
            </button>
            <Link href="/">
              <Image className="hidden h-auto w-auto xl:block 2xl:w-64" src="/images/Logo.svg" priority={true} width={200} height={200} alt="logo"></Image>
            </Link>
            <Link href="/orderonline" className=" xl:hidden">
              <Image src="/images/Basket.svg" width={30} height={30} priority className=" items   h-10 w-10" alt="basketIcon"></Image>
            </Link>
          </div>
          <ul id="menu" className="  hidden  pt-5 lg:text-2xl xl:flex xl:gap-14 xl:pt-0 ">
            <Link href="/" onClick={handleIsClosed} className=" navLink text-ll-primaryGreen underline">
              Home
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
              Dashboard
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
