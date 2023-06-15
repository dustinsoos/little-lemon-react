"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="   ">
        <div className="bg-ll-primaryGreen mt-12">
          <div className=" pt-14 pb-14 text-white md:flex items-center  justify-between  px-4 md:px-24 lg:px-40 xl:px-52">
            <div className="w-3/4 md:w-1/3 lg:w-1/3 2xl:w-1/3 ">
              <h1 className="font-sans text-5xl xl:text-6xl 2xl:text-7xl text-ll-primaryYellow">Little Lemon</h1>
              <h3 className=" text-2xl mb-4 lg:text-2xl xl:text-3xl 2xl:text-4xl">Chicago</h3>
              <p className=" font-mono mb-4 xl:text-lg 2xl:text-xl">
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </p>
              <Link
                href="/reservation"
                className=" text-black font-medium font-sans text-lg rounded-2xl bg-ll-primaryYellow px-4 py-1 2xl:px-8 2xl:py-2 2xl:text-xl hover:bg-ll-primaryGreen hover:text-ll-primaryYellow hover:outline"
              >
                Reserve a Table
              </Link>
            </div>
            <Image
              src="/images/restauranfood.jpg"
              width={200}
              height={200}
              className="hidden -mb-28 lg:-mb-36 md:block md:w-64 lg:w-72 xl:w-96 rounded-2xl"
            ></Image>
          </div>
        </div>
        <section>
          <div className="  mt-16 px-4 lg:mt-32  md:px-24 lg:px-40 xl:px-52">
            <div className=" flex justify-between mt-24">
              <h2 className=" text-2xl font-mono font-bold md:text-3xl lg:text-4xl xl:text-5xl">This weeks specials!</h2>
              <button className=" text-black font-medium font-sans text-lg rounded-2xl bg-ll-primaryYellow px-4 py-0 2xl:px-8 2xl:py-2 2xl:text-xl hover:bg-ll-primaryGreen hover:text-ll-primaryYellow hover:outline">
                Online Menu
              </button>
            </div>
            <div className="lg:flex lg:gap-4 xl:gap-8">
              <div className="mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 mx-auto">
                <div className="relative">
                  <div className="aspect-w-5 aspect-h-3">
                    <Image src="/images/greek salad.jpg" width={500} height={500} alt="Greek Salad" className=" w-full rounded-t-2xl object-cover " />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Greek Salad</h3>
                    <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;12.99</p>
                  </div>
                  <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-24 ">
                    The famous Greek salad has crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary
                    croutons.
                  </p>
                  <Link
                    href="/orderonline"
                    className="block border-2 text-center border-ll-primaryGreen text-ll-primaryGreen font-bold py-2 px-4 rounded hover:bg-ll-primaryGreen hover:text-white"
                  >
                    Order a Delivery
                  </Link>
                </div>
              </div>
              <div className="mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 mx-auto">
                <div className="relative">
                  <div className="aspect-w-5 aspect-h-3">
                    <Image src="/images/bruchetta.svg" width={500} height={500} alt="Bruschetta" className=" w-full rounded-t-2xl object-cover " />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Bruschetta</h3>
                    <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;5.99</p>
                  </div>
                  <p className="mt-4 mb-8 text-lg xl:text-xl lg:mb-24">
                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. It's a great appetizer to
                    start with!
                  </p>
                  <Link
                    href="/orderonline"
                    className="block border-2 text-center border-ll-primaryGreen text-ll-primaryGreen font-bold py-2 px-4 rounded hover:bg-ll-primaryGreen hover:text-white"
                  >
                    Order a Delivery
                  </Link>
                </div>
              </div>
              <div className="mt-8 rounded-2xl shadow-xl shadow-black/50 w-4/5 mx-auto">
                <div className="relative">
                  <div className="aspect-w-5 aspect-h-3">
                    <Image src="/images/lemon dessert.jpg" width={500} height={500} alt="Lemon Dessert" className=" w-full rounded-t-2xl object-cover" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Lemon Dessert</h3>
                    <p className="text-ll-secondarySalmon font-semibold font-mono">&#36;5.00</p>
                  </div>
                  <p className="mt-4 mb-8  text-lg xl:text-xl ">
                    This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. This is
                    perfect for a light dessert!
                  </p>
                  <Link
                    href="/orderonline"
                    className="block border-2 text-center border-ll-primaryGreen text-ll-primaryGreen font-bold py-2 px-4 rounded hover:bg-ll-primaryGreen hover:text-white"
                  >
                    Order a Delivery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
