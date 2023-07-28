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
      <footer className=" mt-8 px-4 pb-16 pt-16 font-mono md:px-24 lg:px-40 lg:pb-32 lg:pt-32 xl:px-52 2xl:px-72">
        <div className=" grid justify-center justify-items-center lg:flex lg:justify-between">
          <Image
            src="/images/bottomlogo.png"
            width={100}
            height={100}
            alt="bottom-logo"
            priority={true}
            className="mb-8 w-20 lg:mb-0"
          ></Image>
          <div className=" mb-8 text-center lg:mb-0 lg:text-left">
            <h3 className=" text-xl font-semibold">Doormat Navigation</h3>
            <ul id="menu" className=" mb-4 grid md:mb-0">
              <Link
                href="/"
                className=" navLink text-ll-primaryGreen underline"
              >
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
                Dashboard
              </Link>
              <Link href="/login " className="navLink">
                Login
              </Link>
            </ul>
          </div>
          <div className=" mb-8 text-center lg:mb-0 lg:text-left">
            <h3 className=" text-xl font-semibold"> Contact</h3>
            <p>Chicago, IL</p>
            <p>888-888-8888</p>
            <p>littlelemon@business.com</p>
          </div>
          <div className="grid justify-center justify-items-center md:mb-8 md:block">
            <h3 className=" mb-4 text-xl font-semibold"> Social Media</h3>
            <div className="flex gap-2">
              <Image
                src="/images/linkedin.svg"
                className=" mb-2 h-8 w-8 md:mx-auto md:mb-0 "
                alt="linkedin-logo"
                width={30}
                height={30}
              ></Image>
              <Image
                src="/images/twitter.svg"
                className=" mb-2 h-8 w-8 md:mx-auto md:mb-0"
                alt="twitter-logo"
                width={30}
                height={30}
              ></Image>
              <Image
                src="/images/insta.svg"
                className=" mb-2 h-8 w-8 md:mx-auto md:mb-0"
                alt="instagram-logo"
                width={30}
                height={30}
              ></Image>
            </div>
            <p className="mt-10">&#169; Dustin Soos</p>
          </div>
          <button onClick={scrollToTop}>
            <Image
              src="/images/arrowup.svg"
              alt="arrowup-icon"
              className="z-10 mt-8 animate-bounce 	md:mt-0 "
              width={40}
              height={40}
            ></Image>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
