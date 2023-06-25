import React from "react";
import Image from "next/image";

const OrderOnline = () => {
  return (
    <>
      <main className="h-screen mt-32  px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72 bg-ll-primaryGreen">
        {/* <section className=" pt-28 pb-28  bg-ll-primaryGreen">
          <h1 className=" text-center font-sans text-5xl xl:text-6xl 2xl:text-7xl text-ll-primaryYellow">
            Our delivery driver Is being a rookie at the moment... & can't take orders.
          </h1>
        </section> */}
        <form action="" className=" font-mono text-black pt-14 pb-14 ">
          <div className="w-3/4 lg:w-1/2 mx-auto bg-white rounded-2xl">
            <Image src="/images/greek salad.jpg" alt="Greek Salad" width={300} height={300} className=" w-full object-cover round"></Image>
            <h3 className="text-center text-lg">Pick A Salad Main</h3>
            <div className="flex gap-2 items-center justify-center mt-4">
              <div className="flex gap-2">
                <label htmlFor="steak-option">Steak:</label>
                <input type="checkbox" id="steak-option" />
              </div>
              <div className="flex gap-2">
                <label htmlFor="chicken-option">Chicken:</label>
                <input type="checkbox" id="chicken-option" />
              </div>
              <div className="flex gap-2">
                <label htmlFor="veggie-option">Veggie:</label>
                <input type="checkbox" id="veggie-option" />
              </div>
            </div>
            <button type="submit" className="mx-auto">
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default OrderOnline;
