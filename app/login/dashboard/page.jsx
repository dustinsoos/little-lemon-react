"use client";

import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <main className="mb-64 h-screen">
        <div className=" mt-32">
          <h1 className="px-4  font-sans text-5xl md:px-24 lg:px-40 xl:px-52 xl:text-6xl 2xl:px-72 2xl:text-7xl">
            Recent Orders
          </h1>
          <section className=" bg-ll-primaryGreen pb-28 pt-28">
            <h2 className=" text-center font-mono text-3xl text-ll-primaryYellow xl:text-4xl 2xl:text-5xl">
              You have no recent orders
            </h2>
          </section>
        </div>
        <div className=" mt-32">
          <h1 className="px-4  font-sans text-5xl md:px-24 lg:px-40 xl:px-52 xl:text-6xl 2xl:px-72 2xl:text-7xl">
            Recent Reservations
          </h1>
          <section className=" bg-ll-primaryGreen pb-28 pt-28">
            <h2 className=" text-center font-mono text-3xl text-ll-primaryYellow xl:text-4xl 2xl:text-5xl">
              You have no recent reservations
            </h2>
            <Link
              href="./reservation"
              className="mx-auto mt-12 block w-2/3 rounded border-2 border-white  bg-ll-primaryGreen px-4 py-1 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen lg:w-1/3"
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
