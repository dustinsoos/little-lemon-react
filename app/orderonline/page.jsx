"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const OrderOnline = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [total, setTotal] = useState(12.99);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setTotal(total + (isChecked ? -1 : 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formHidden = document.getElementById("order-form");
    formHidden.classList.add("hidden");

    const submissionShow = document.getElementById("delivery-success");
    submissionShow.classList.remove("hidden");
  };

  return (
    <>
      <main className="sm:64 mb-96 mt-32 h-screen ">
        <section className=" mt-16 bg-ll-primaryGreen pb-28 pt-28">
          <h1 className=" text-center font-sans text-5xl text-ll-primaryYellow xl:text-6xl 2xl:text-7xl">
            Order A Delivery
          </h1>
        </section>

        <form
          action=""
          onSubmit={handleSubmit}
          id="order-form"
          className=" grid pb-14 pt-14 font-mono text-black "
        >
          <div className="mx-auto w-11/12 rounded-2xl border border-ll-primaryGreen bg-white shadow-xl shadow-black/50 md:w-2/3 lg:w-2/4 xl:w-1/3">
            <Image
              src="/images/greek salad.jpg"
              alt="Greek Salad"
              width={300}
              height={300}
              className=" w-full  rounded-tl-2xl rounded-tr-2xl object-contain"
            ></Image>
            <div className="flex justify-between px-8 lg:px-16 lg:text-xl">
              <h3 className="font-semibold">Greek Salad</h3>
              <p className="font-mono font-semibold text-ll-secondarySalmon">
                &#36;12.99
              </p>
            </div>
            <div className="mt-2 grid justify-center  gap-2 px-8 lg:px-16 lg:text-xl">
              <h3 className="mt-4  font-mono text-2xl font-bold md:text-3xl  lg:text-3xl xl:text-3xl 2xl:text-3xl">
                Protein or Veggie
              </h3>
              <hr />
              <div className="flex justify-center gap-2 ">
                <label htmlFor="steak-option">Steak:</label>
                <input
                  type="checkbox"
                  name="steak"
                  id="steak-option"
                  defaultChecked={false}
                  onChange={handleCheckboxChange}
                />
                <p>+ 1.00</p>
              </div>
              <div className="flex justify-center  gap-2">
                <label htmlFor="chicken-option">Chicken:</label>
                <input type="checkbox" id="chicken-option" />
              </div>
              <div className="flex justify-center gap-2 ">
                <label htmlFor="veggie-option">Veggie:</label>
                <input type="checkbox" id="veggie-option" />
              </div>
            </div>
            <div className="mt-2 grid items-center justify-center gap-2 px-8 lg:px-16 lg:text-xl">
              <h3 className="mt-4  font-mono text-2xl font-bold md:text-3xl  lg:text-3xl xl:text-3xl 2xl:text-3xl">
                What else would you like?
              </h3>
              <hr />
              <div className="flex justify-center gap-2">
                <label htmlFor="beans-option">Beans:</label>
                <input type="checkbox" id="beans-option" />
              </div>
              <div className="flex justify-center gap-2">
                <label htmlFor="cheese-option">Cheese:</label>
                <input type="checkbox" id="cheese-option" />
              </div>
              <div className="flex justify-center gap-2">
                <label htmlFor="olives-option">Olives:</label>
                <input type="checkbox" id="olives-option" />
              </div>
              <div className="flex justify-center gap-2">
                <label htmlFor="tomatos-option">Tomatos:</label>
                <input type="checkbox" id="tomatos-option" />
              </div>
              <div className="flex justify-center gap-2">
                <label htmlFor="cucumber-option">Cucumber:</label>
                <input type="checkbox" id="cucumber-option" />
              </div>
            </div>
            <button
              type="submit"
              className="mx-auto mb-4 mt-4 flex bg-ll-primaryGreen px-10 py-1 font-semibold text-white hover:border-2 hover:border-ll-primaryGreen hover:bg-white hover:text-ll-primaryGreen disabled:bg-opacity-75 "
            >
              Total: {total}
            </button>
          </div>
        </form>
        <div
          id="delivery-success"
          className=" mx-auto mb-64 mt-64 hidden  w-11/12 rounded-2xl  bg-ll-primaryGreen p-14 text-center font-mono text-xl text-white shadow-xl shadow-black/50 md:w-1/2  xl:w-1/3"
        >
          <p className=" text-2xl text-ll-primaryYellow lg:text-3xl ">
            Thanks for ordering a delivery with Little Lemon!
          </p>
          <p className=" mt-2">
            Your order will arrive in approximately 30 minutes
          </p>
        </div>
      </main>
    </>
  );
};

export default OrderOnline;
