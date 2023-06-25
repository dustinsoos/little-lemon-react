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
      <main className="h-screen mt-32 sm:64 mb-96 ">
        <section className=" pt-28 pb-28 mt-16 bg-ll-primaryGreen">
          <h1 className=" text-center font-sans text-5xl xl:text-6xl 2xl:text-7xl text-ll-primaryYellow">Order A Delivery</h1>
        </section>

        <form action="" onSubmit={handleSubmit} id="order-form" className=" grid font-mono text-black pt-14 pb-14 ">
          <div className="w-11/12 md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto bg-white rounded-2xl border border-ll-primaryGreen shadow-xl shadow-black/50">
            <Image
              src="/images/greek salad.jpg"
              alt="Greek Salad"
              width={300}
              height={300}
              className=" w-full  object-contain rounded-tl-2xl rounded-tr-2xl"
            ></Image>
            <div className="flex justify-between px-8 lg:px-16 lg:text-xl">
              <h3 className="font-semibold">Greek Salad</h3>
              <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;12.99</p>
            </div>
            <div className="grid gap-2 justify-center  mt-2 px-8 lg:px-16 lg:text-xl">
              <h3 className="mt-4  text-2xl font-mono font-bold md:text-3xl  lg:text-3xl xl:text-3xl 2xl:text-3xl">Protein or Veggie</h3>
              <hr />
              <div className="flex gap-2 justify-center ">
                <label htmlFor="steak-option">Steak:</label>
                <input type="checkbox" name="steak" id="steak-option" defaultChecked={false} onChange={handleCheckboxChange} />
                <p>+ 1.00</p>
              </div>
              <div className="flex gap-2  justify-center">
                <label htmlFor="chicken-option">Chicken:</label>
                <input type="checkbox" id="chicken-option" />
              </div>
              <div className="flex gap-2 justify-center ">
                <label htmlFor="veggie-option">Veggie:</label>
                <input type="checkbox" id="veggie-option" />
              </div>
            </div>
            <div className="grid gap-2 items-center justify-center mt-2 px-8 lg:px-16 lg:text-xl">
              <h3 className="mt-4  text-2xl font-mono font-bold md:text-3xl  lg:text-3xl xl:text-3xl 2xl:text-3xl">What else would you like?</h3>
              <hr />
              <div className="flex gap-2 justify-center">
                <label htmlFor="beans-option">Beans:</label>
                <input type="checkbox" id="beans-option" />
              </div>
              <div className="flex gap-2 justify-center">
                <label htmlFor="cheese-option">Cheese:</label>
                <input type="checkbox" id="cheese-option" />
              </div>
              <div className="flex gap-2 justify-center">
                <label htmlFor="olives-option">Olives:</label>
                <input type="checkbox" id="olives-option" />
              </div>
              <div className="flex gap-2 justify-center">
                <label htmlFor="tomatos-option">Tomatos:</label>
                <input type="checkbox" id="tomatos-option" />
              </div>
              <div className="flex gap-2 justify-center">
                <label htmlFor="cucumber-option">Cucumber:</label>
                <input type="checkbox" id="cucumber-option" />
              </div>
            </div>
            <button
              type="submit"
              className="flex text-white bg-ll-primaryGreen font-semibold hover:border-2 hover:border-ll-primaryGreen hover:text-ll-primaryGreen hover:bg-white px-10 py-1 mx-auto mt-4 mb-4 disabled:bg-opacity-75 "
            >
              Total: {total}
            </button>
          </div>
        </form>
        <div
          id="delivery-success"
          className=" bg-ll-primaryGreen p-14 mt-64 mb-64  shadow-xl shadow-black/50  text-center text-white font-mono text-xl w-11/12 md:w-1/2 xl:w-1/3 mx-auto rounded-2xl  hidden"
        >
          <p className=" text-ll-primaryYellow text-2xl lg:text-3xl ">Thanks for ordering a delivery with Little Lemon!</p>
          <p className=" mt-2">Your order will arrive in approximately 30 minutes</p>
        </div>
      </main>
    </>
  );
};

export default OrderOnline;
