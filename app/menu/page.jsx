"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <main>
        {/* Top Section */}

        <section className=" mt-16 bg-ll-primaryGreen pb-28 pt-28">
          <h1 className=" text-center font-sans text-5xl text-ll-primaryYellow xl:text-6xl 2xl:text-7xl">Our Menu</h1>
        </section>
        {/* Appetizer Section  */}

        <section className=" px-4 pb-14 pt-14 md:px-24 lg:mt-16 lg:px-40 xl:px-52 2xl:px-72">
          <h2 className=" mb-8 font-mono text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">Appetizers</h2>
          <div className=" gap-4 lg:flex 2xl:gap-8">
            <div className="  mx-auto mt-8 w-4/5 rounded-2xl shadow-xl shadow-black/50 lg:w-1/3">
              <div className="relative">
                <div className="">
                  <Image src="/images/bruchetta.svg" width={500} height={500} alt="Bruschetta Img" className=" h-56 w-full rounded-t-2xl object-cover" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Bruschetta</h3>
                  <p className="font-mono font-semibold text-ll-secondarySalmon">&#36;5.99</p>
                </div>
                <p className="mb-8 mt-4 text-lg lg:mb-32 xl:text-xl ">
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. It's a great appetizer to
                  start with!
                </p>
                <Link
                  href="/orderonline"
                  className="block rounded border-2 border-ll-primaryGreen bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mx-auto mt-8 w-4/5 rounded-2xl shadow-xl shadow-black/50 lg:w-1/3 ">
              <div className="relative">
                <div className="">
                  <Image src="/images/soupapp.jpg" width={500} height={500} alt="Soup pic" className=" h-56 w-full rounded-t-2xl object-cover " />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Tomato Soup</h3>
                  <p className="font-mono font-semibold text-ll-secondarySalmon">&#36;7.99</p>
                </div>
                <p className="mb-8 mt-4 text-lg lg:mb-24 xl:text-xl ">
                  Our Tomato soup is a vibrant and comforting dish that captures the essence of Mediterranean flavors. This exquisite creation is crafted with a
                  blend of sun-kissed tomatoes & aromatic herbs.
                </p>
                <Link
                  href="/orderonline"
                  className="block rounded border-2 border-ll-primaryGreen bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mx-auto mt-8 w-4/5 rounded-2xl shadow-xl shadow-black/50 lg:w-1/3 ">
              <div className="relative">
                <div className="">
                  <Image
                    src="/images/platterapp.jpg"
                    width={500}
                    height={500}
                    alt="Mediterranean Platter"
                    className=" h-56 w-full rounded-t-2xl object-cover "
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Mediterranean Platter</h3>
                  <p className="font-mono font-semibold text-ll-secondarySalmon">&#36;13.99</p>
                </div>
                <p className="mb-8 mt-4 text-lg lg:mb-24 xl:text-xl ">
                  Our Mediterranean Platter combines a tantalizing blend of fresh grapes, crisp crackers, velvety hummus, succulent sausage, and juicy apples to
                  create a harmonious culinary experience.
                </p>
                <Link
                  href="/orderonline"
                  className="block rounded border-2 border-ll-primaryGreen bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Entree Section */}

        <section className=" px-4 pb-14 pt-14 md:px-24 lg:mt-16 lg:px-40 xl:px-52 2xl:px-72">
          <h2 className=" mb-8 font-mono text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">Entrees</h2>
          <div className=" gap-4 lg:flex 2xl:gap-8">
            <div className="  mx-auto mt-8 w-4/5 rounded-2xl shadow-xl shadow-black/50 lg:w-1/3">
              <div className="relative">
                <div className="">
                  <Image src="/images/greek salad.jpg" width={500} height={500} alt="Greek Salad" className=" h-56 w-full rounded-t-2xl object-cover" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Greek Salad</h3>
                  <p className="font-mono font-semibold text-ll-secondarySalmon">&#36;12.99</p>
                </div>
                <p className="mb-8 mt-4 text-lg lg:mb-32 xl:text-xl ">
                  The famous Greek salad has crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary
                  croutons.
                </p>
                <Link
                  href="/orderonline"
                  className="block rounded border-2 border-ll-primaryGreen bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mx-auto mt-8 w-4/5 rounded-2xl shadow-xl shadow-black/50 lg:w-1/3">
              <div className="relative">
                <div className="">
                  <Image src="/images/salmondinner.jpg" width={500} height={500} alt="Salmon Image" className=" h-56 w-full rounded-t-2xl object-cover " />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Salmon Fillet</h3>
                  <p className="font-mono font-semibold text-ll-secondarySalmon">&#36;15.99</p>
                </div>
                <p className="mb-8 mt-4 text-lg lg:mb-24 xl:text-xl ">
                  The salmon fillet is expertly seasoned with Mediterranean spices, such as a blend of aromatic herbs, tangy lemon zest, and a hint of garlic.
                  This perfect combination infuses the fish with layers of depth and complexity.
                </p>
                <Link
                  href="/orderonline"
                  className="block rounded border-2 border-ll-primaryGreen bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mx-auto mt-8 w-4/5 rounded-2xl shadow-xl shadow-black/50 lg:w-1/3">
              <div className="relative">
                <div className="">
                  <Image src="/images/porkdinner.jpg" width={500} height={500} alt="Pork Image" className=" h-56 w-full rounded-t-2xl object-cover " />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Pork & Veg</h3>
                  <p className="font-mono font-semibold text-ll-secondarySalmon">&#36;13.99</p>
                </div>
                <p className="mb-8 mt-4 text-lg lg:mb-36 xl:text-xl ">
                  This delightful dish showcases the flavors of pork infused with the vibrant Mediterranean trio of tomatoes, onions, and cilantro.
                </p>
                <Link
                  href="/orderonline"
                  className="block rounded border-2 border-ll-primaryGreen bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Dessert Section */}

        <section className=" px-4 pb-14 pt-14 md:px-24 lg:mt-16 lg:px-40 xl:px-52 2xl:px-72">
          <h2 className=" mb-8 font-mono text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">Desserts</h2>
          <div className=" gap-4 lg:flex 2xl:gap-8">
            <div className="  mx-auto mt-8 w-4/5 rounded-2xl shadow-xl shadow-black/50 lg:w-1/3">
              <div className="relative">
                <div className="">
                  <Image src="/images/lemon dessert.jpg" width={500} height={500} alt="Lemoncake Image" className=" h-56 w-full rounded-t-2xl object-cover" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Lemon Dessert</h3>
                  <p className="font-mono font-semibold text-ll-secondarySalmon">&#36;5.00</p>
                </div>
                <p className="mb-8 mt-4 text-lg lg:mb-48 xl:text-xl ">
                  This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. This is perfect
                  for a light dessert!
                </p>
                <Link
                  href="/orderonline"
                  className="block rounded border-2 border-ll-primaryGreen bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mx-auto mt-8 w-4/5 rounded-2xl shadow-xl shadow-black/50 lg:w-1/3">
              <div className="relative">
                <div className="">
                  <Image src="/images/truffledes.jpg" width={500} height={500} alt="Truffle Image" className=" h-56 w-full rounded-t-2xl object-cover " />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Chocolate Truffles</h3>
                  <p className="font-mono font-semibold text-ll-secondarySalmon">&#36;8.99</p>
                </div>
                <p className="mb-8 mt-4 text-lg lg:mb-40 xl:text-xl ">
                  Indulge in a decadent journey of chocolate bliss with our exquisite Chocolate Truffles dessert, a heavenly creation that adds a touch of
                  Mediterranean flair to this classic confection.
                </p>
                <Link
                  href="/orderonline"
                  className="block rounded border-2 border-ll-primaryGreen bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen"
                >
                  Order a Delivery
                </Link>
              </div>
            </div>
            <div className="  mx-auto mt-8 w-4/5 rounded-2xl shadow-xl shadow-black/50 lg:w-1/3">
              <div className="relative">
                <div className="">
                  <Image src="/images/icecreamdes.jpg" width={500} height={500} alt="Ice Cream Image" className=" h-56 w-full rounded-t-2xl object-cover " />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Caramel Ice Cream</h3>
                  <p className="font-mono font-semibold text-ll-secondarySalmon">&#36;6.99</p>
                </div>
                <p className="mb-8 mt-4 text-lg lg:mb-36 xl:text-xl ">
                  Crafted with utmost care and attention, our Caramel Ice Cream begins with a luscious, creamy base that is made using the finest ingredients.
                  We start by simmering sweetened milk and cream until they reach the perfect consistency.
                </p>
                <Link
                  href="/orderonline"
                  className="block rounded border-2 border-ll-primaryGreen bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen"
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
