"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  function openNav() {
    let menuButton = document.getElementById("menu");
    menuButton.classList.toggle("hidden");
    menuButton.classList.toggle("grid");
  }
  return (
    <main>
      <div className="mt-6 container mx-auto">
        <nav className="lg:flex lg:justify-around lg:items-center font-sans text-lg">
          <div className=" flex justify-between ">
            <button id="menuBtn" onClick={openNav} className=" lg:hidden">
              <Image src="/images/icon_hamburger-menu.svg" width={30} height={30} className=" cursor-pointer "></Image>
            </button>
            <Image className="  hidden lg:block" src="/images/Logo.svg" width={200} height={200}></Image>
            <button className=" lg:hidden">
              <Image src="/images/Basket.svg" width={30} height={30} className=" items"></Image>
            </button>
          </div>
          <ul id="menu" className="  pt-5  lg:flex lg:gap-14 lg:pt-0 hidden">
            <Link href="/home" className=" underline text-ll-primaryGreen">
              Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/reservation">Reservation</Link>
            <Link href="/orderonline">Order Online</Link>
            <Link href="/login">Login</Link>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
