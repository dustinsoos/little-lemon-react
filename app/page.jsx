"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className=" bg-ll-primaryGreen mt-12 px-4 md:px-24 lg:px-40 xl:px-52 ">
        <div>
          <div className="pt-14 pb-14 text-white md:flex items-center  justify-between">
            <div className="w-3/4 md:w-1/3 lg:w-1/3 2xl:w-1/3 ">
              <h1 className="font-sans text-5xl 2xl:text-8xl text-ll-primaryYellow">Little Lemon</h1>
              <h3 className=" text-2xl mb-4 lg:text-2xl 2xl:text-4xl">Chicago</h3>
              <p className=" font-mono mb-4 2xl:text-xl">
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </p>
              <button className=" text-black font-medium font-sans text-lg rounded-2xl bg-ll-primaryYellow px-4 py-1 2xl:px-8 2xl:py-2 2xl:text-xl">
                Reserve a Table
              </button>
            </div>
            <Image
              src="/images/restauranfood.jpg"
              width={200}
              height={200}
              className="hidden -mb-28 lg:-mb-36 md:block md:w-64 lg:w-72 xl:w-96 rounded-2xl"
            ></Image>
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
}
