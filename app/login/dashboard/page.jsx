"use client";

import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <main className="h-screen">
        <div className=" mt-32">
          <h1 className="font-sans  text-5xl xl:text-6xl 2xl:text-7xl px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">Recent Orders</h1>
          <section className=" pt-28 pb-28 bg-ll-primaryGreen">
            <h2 className=" text-center font-mono text-3xl xl:text-4xl 2xl:text-5xl text-ll-primaryYellow">You have no recent orders</h2>
          </section>
        </div>
        <div className=" mt-32">
          <h1 className="font-sans  text-5xl xl:text-6xl 2xl:text-7xl px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">Recent Reservations</h1>
          <section className=" pt-28 pb-28 bg-ll-primaryGreen">
            <h2 className=" text-center font-mono text-3xl xl:text-4xl 2xl:text-5xl text-ll-primaryYellow">You have no recent reservations</h2>
            <Link
              href="./reservation"
              className="block mt-12 w-1/3 text-center mx-auto border-2  border-white bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
            >
              Reserve Table
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default Dashboard;