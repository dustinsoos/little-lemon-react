"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <main>
        {/* Top Section */}

        <section className=" pt-28 pb-28 mt-16 bg-ll-primaryGreen">
          <h1 className=" text-center font-sans text-5xl xl:text-6xl 2xl:text-7xl text-ll-primaryYellow">Our Menu</h1>
        </section>
        {/* Appetizer Section  */}

        <section className=" pt-14 pb-14 lg:mt-16 px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">
          <h2 className=" mb-8 text-2xl font-mono font-bold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">Appetizers</h2>
          <div className=" lg:flex gap-4 2xl:gap-8">
            <div className="  mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 lg:w-1/3 mx-auto">
              <div className="relative">
                <div className="">
                  <Image src="/images/bruchetta.svg" width={500} height={500} alt="Bruschetta Img" className=" w-full rounded-t-2xl object-cover h-56" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Bruschetta</h3>
                  <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;5.99</p>
                </div>
                <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-32 ">
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. It's a great appetizer to
                  start with!
                </p>
                <Link
                  href="/orderonline"
                  className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 lg:w-1/3 mx-auto ">
              <div className="relative">
                <div className="">
                  <Image src="/images/soupapp.jpg" width={500} height={500} alt="Soup pic" className=" w-full rounded-t-2xl object-cover h-56 " />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Tomato Soup</h3>
                  <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;7.99</p>
                </div>
                <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-24 ">
                  Our Tomato soup is a vibrant and comforting dish that captures the essence of Mediterranean flavors. This exquisite creation is crafted with a
                  blend of sun-kissed tomatoes & aromatic herbs.
                </p>
                <Link
                  href="/orderonline"
                  className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 lg:w-1/3 mx-auto ">
              <div className="relative">
                <div className="">
                  <Image
                    src="/images/platterapp.jpg"
                    width={500}
                    height={500}
                    alt="Mediterranean Platter"
                    className=" w-full rounded-t-2xl object-cover h-56 "
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Mediterranean Platter</h3>
                  <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;13.99</p>
                </div>
                <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-24 ">
                  Our Mediterranean Platter combines a tantalizing blend of fresh grapes, crisp crackers, velvety hummus, succulent sausage, and juicy apples to
                  create a harmonious culinary experience.
                </p>
                <Link
                  href="/orderonline"
                  className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Entree Section */}

        <section className=" pt-14 pb-14 lg:mt-16 px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">
          <h2 className=" mb-8 text-2xl font-mono font-bold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">Entrees</h2>
          <div className=" lg:flex gap-4 2xl:gap-8">
            <div className="  mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 lg:w-1/3 mx-auto">
              <div className="relative">
                <div className="">
                  <Image src="/images/greek salad.jpg" width={500} height={500} alt="Greek Salad" className=" w-full rounded-t-2xl object-cover h-56" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Greek Salad</h3>
                  <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;12.99</p>
                </div>
                <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-32 ">
                  The famous Greek salad has crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary
                  croutons.
                </p>
                <Link
                  href="/orderonline"
                  className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 lg:w-1/3 mx-auto">
              <div className="relative">
                <div className="">
                  <Image src="/images/salmondinner.jpg" width={500} height={500} alt="Salmon Image" className=" w-full rounded-t-2xl object-cover h-56 " />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Salmon Fillet</h3>
                  <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;15.99</p>
                </div>
                <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-24 ">
                  The salmon fillet is expertly seasoned with Mediterranean spices, such as a blend of aromatic herbs, tangy lemon zest, and a hint of garlic.
                  This perfect combination infuses the fish with layers of depth and complexity.
                </p>
                <Link
                  href="/orderonline"
                  className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 lg:w-1/3 mx-auto">
              <div className="relative">
                <div className="">
                  <Image src="/images/porkdinner.jpg" width={500} height={500} alt="Pork Image" className=" w-full rounded-t-2xl object-cover h-56 " />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Pork & Veg</h3>
                  <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;13.99</p>
                </div>
                <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-36 ">
                  This delightful dish showcases the flavors of pork infused with the vibrant Mediterranean trio of tomatoes, onions, and cilantro.
                </p>
                <Link
                  href="/orderonline"
                  className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Dessert Section */}

        <section className=" pt-14 pb-14 lg:mt-16 px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">
          <h2 className=" mb-8 text-2xl font-mono font-bold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">Desserts</h2>
          <div className=" lg:flex gap-4 2xl:gap-8">
            <div className="  mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 lg:w-1/3 mx-auto">
              <div className="relative">
                <div className="">
                  <Image src="/images/lemon dessert.jpg" width={500} height={500} alt="Lemoncake Image" className=" w-full rounded-t-2xl object-cover h-56" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Lemon Dessert</h3>
                  <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;5.00</p>
                </div>
                <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-48 ">
                  This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. This is perfect
                  for a light dessert!
                </p>
                <Link
                  href="/orderonline"
                  className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 lg:w-1/3 mx-auto">
              <div className="relative">
                <div className="">
                  <Image src="/images/truffledes.jpg" width={500} height={500} alt="Truffle Image" className=" w-full rounded-t-2xl object-cover h-56 " />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Chocolate Truffles</h3>
                  <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;8.99</p>
                </div>
                <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-40 ">
                  Indulge in a decadent journey of chocolate bliss with our exquisite Chocolate Truffles dessert, a heavenly creation that adds a touch of
                  Mediterranean flair to this classic confection.
                </p>
                <Link
                  href="/orderonline"
                  className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 lg:w-1/3 mx-auto">
              <div className="relative">
                <div className="">
                  <Image src="/images/icecreamdes.jpg" width={500} height={500} alt="Ice Cream Image" className=" w-full rounded-t-2xl object-cover h-56 " />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Caramel Ice Cream</h3>
                  <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;6.99</p>
                </div>
                <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-36 ">
                  Crafted with utmost care and attention, our Caramel Ice Cream begins with a luscious, creamy base that is made using the finest ingredients.
                  We start by simmering sweetened milk and cream until they reach the perfect consistency.
                </p>
                <Link
                  href="/orderonline"
                  className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Menu;
