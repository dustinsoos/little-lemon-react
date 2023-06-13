"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" container mx-auto">
      <div className="mt-6">
        <nav className="">
          <div className=" flex justify-between">
            <Image className="  hidden lg:block" src="/images/icons_assets/Logo.svg" width={300} height={300}></Image>
            <button>
              <Image src="/images/icons_assets/icon_hamburger-menu.svg" width={30} height={30} className=" cursor-pointer block lg:hidden"></Image>
            </button>
            <button>
              <Image src="/images/icons_assets/Basket.svg" width={30} height={30}></Image>
            </button>
          </div>
          <ul id="menu" className=" grid collapse md:block">
            <Link href="/home">Home</Link>
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
}
