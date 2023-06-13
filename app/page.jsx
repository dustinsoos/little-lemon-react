"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="mt-6 container mx-auto">
        <nav className="">
          <div className=" flex justify-between">
            <Image className="  hidden lg:block" src="/images/Logo.svg" width={300} height={300}></Image>
            <button>
              <Image src="/images/icon_hamburger-menu.svg" width={30} height={30} className=" cursor-pointer block lg:hidden"></Image>
            </button>
            <button>
              <Image src="/images/Basket.svg" width={30} height={30}></Image>
            </button>
          </div>
          <ul id="menu" className=" grid  md:block pt-5">
            <Link href="/home">Home</Link>
            <Link href="/pages/about">About</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/reservation">Reservation</Link>
            <Link href="/orderonline">Order Online</Link>
            <Link href="/login">Login</Link>
          </ul>
        </nav>
      </div>
    </main>
  );
}
