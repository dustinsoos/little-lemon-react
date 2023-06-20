"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className=" font-mono pt-16 pb-16 lg:pt-32 lg:pb-32 mt-8 px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">
        <div className=" grid justify-center justify-items-center lg:flex lg:justify-between">
          <Image src="/images/bottomlogo.png" width={100} height={100} alt="bottom-logo" priority={true} className="mb-8 lg:mb-0 w-20"></Image>
          <div className=" mb-8 lg:mb-0 text-center lg:text-left">
            <h3 className=" text-xl font-semibold">Doormat Navigation</h3>
            <ul id="menu" className=" grid mb-4 md:mb-0">
              <Link href="/" className=" underline text-ll-primaryGreen navLink">
                Home
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
          <div className=" mb-8 lg:mb-0 text-center lg:text-left">
            <h3 className=" text-xl font-semibold"> Contact</h3>
            <p>Chicago, IL</p>
            <p>888-888-8888</p>
            <p>littlelemon@business.com</p>
          </div>
          <div className="grid justify-center justify-items-center md:block md:mb-8">
            <h3 className=" text-xl font-semibold mb-4"> Social Media</h3>
            <div className="flex gap-2">
              <Image src="/images/linkedin.svg" className=" mb-2 md:mb-0 md:mx-auto w-8 h-8 " alt="linkedin-logo" width={30} height={30}></Image>
              <Image src="/images/twitter.svg" className=" mb-2 md:mb-0 md:mx-auto w-8 h-8" alt="twitter-logo" width={30} height={30}></Image>
              <Image src="/images/insta.svg" className=" mb-2 md:mb-0 md:mx-auto w-8 h-8" alt="instagram-logo" width={30} height={30}></Image>
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
