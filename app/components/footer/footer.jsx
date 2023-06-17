"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  return (
    <>
      <footer className="pt-16 pb-16 md:pt-32 md:pb-32 mt-32 px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">
        <div className=" grid justify-center justify-items-center md:flex md:justify-between">
          <Image src="/images/bottomlogo.png" width={100} height={100} alt="bottom-logo" className="mb-8 md:mb-0"></Image>
          <div className=" mb-8 md:mb-0 text-center md:text-left">
            <h3 className=" text-xl font-semibold">Doormat Navigation</h3>
            <ul id="menu" className=" grid mb-4 md:mb-0">
              <Link href="/" className=" underline text-ll-primaryGreen navLink">
                Home
              </Link>
              <Link href="/about" className="navLink">
                About
              </Link>
              <Link href="/menu" className="navLink">
                Menu
              </Link>
              <Link href="/reservation" className="navLink">
                Reservation
              </Link>
              <Link href="/orderonline" className="navLink">
                Order Online
              </Link>
              <Link href="/login " className="navLink">
                Login
              </Link>
            </ul>
          </div>
          <div className=" mb-8 md:mb-0 text-center md:text-left">
            <h3 className=" text-xl font-semibold"> Contact</h3>
            <p>Chicago, IL</p>
            <p>888-888-8888</p>
            <p>littlelemon@business.com</p>
          </div>
          <div className="grid justify-center justify-items-center md:block">
            <h3 className=" text-xl font-semibold mb-4"> Social Media</h3>
            <div className=" md:flex">
              <Image src="/images/linkedin.svg" className=" mb-2 md:mb-0 md:mx-auto" alt="linkedin-logo" width={30} height={30}></Image>
              <Image src="/images/twitter.svg" className=" mb-2 md:mb-0 md:mx-auto" alt="twitter-logo" width={30} height={30}></Image>
              <Image src="/images/insta.svg" className=" mb-2 md:mb-0 md:mx-auto" alt="instagram-logo" width={30} height={30}></Image>
            </div>
          </div>
          <button onClick={scrollToTop}>
            <Image src="/images/arrowup.svg" alt="arrowup-icon" className="mt-8 md:mt-0 z-10 	animate-bounce " width={40} height={40}></Image>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
