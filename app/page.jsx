"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <section className="bg-ll-primaryGreen mt-12">
          <div className=" pt-14 pb-14 text-white md:flex items-center  justify-between  px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">
            <div className="w-3/4 md:w-1/3 lg:w-1/3 2xl:w-1/3 ">
              <h1 className="font-sans text-5xl xl:text-6xl 2xl:text-7xl text-ll-primaryYellow">Little Lemon</h1>
              <h3 className=" text-2xl mb-4 lg:text-2xl xl:text-3xl 2xl:text-4xl">Chicago</h3>
              <p className=" font-mono mb-4 lg:mb-12 xl:text-lg 2xl:text-xl">
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </p>
              <Link
                href="/reservation"
                className=" text-black font-medium font-sans text-lg rounded-2xl bg-ll-primaryYellow px-4 py-1 2xl:px-8 2xl:py-2 2xl:text-xl  hover:bg-ll-primaryGreen hover:text-ll-primaryYellow hover:outline"
              >
                Reserve a Table
              </Link>
            </div>
            <Image
              src="/images/restauranfood.jpg"
              width={200}
              height={200}
              alt="Restaurant Food"
              className="hidden -mb-28 lg:-mb-36 md:block md:w-64 lg:w-72 xl:w-96 rounded-2xl"
            ></Image>
          </div>
        </section>
        <section id="menu-cards">
          <div className="  mt-16 px-0 lg:mt-32  md:px-24 lg:px-40 xl:px-52 2xl:px-72">
            <div className=" px-4 flex justify-between items-center mt-24">
              <h3 className=" text-2xl font-mono font-bold md:text-3xl lg:text-4xl xl:text-5xl">This weeks specials!</h3>
              <Link
                href="/menu"
                className=" text-black font-medium font-sans text-lg rounded-2xl bg-ll-primaryYellow px-4 py-0 2xl:px-8 2xl:py-2 2xl:text-xl hover:bg-ll-primaryGreen hover:text-ll-primaryYellow hover:outline"
              >
                Online Menu
              </Link>
            </div>
            <div className=" lg:flex lg:gap-4 xl:gap-8">
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
                    className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
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
                    className="block border-2 text-center  border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
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
                    className="block border-2 text-center border-ll-primaryGreen bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
                  >
                    Order a Delivery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className=" bg-ll-primaryGreen pt-14 pb-14 mt-32 lg:mt-64">
          <div className=" px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">
            <h3 className=" mb-8 text-white text-2xl font-mono font-bold md:text-3xl lg:text-4xl xl:text-5xl">Testimonials</h3>
            <div className=" font-mono lg:flex gap-4">
              <div className="  bg-white shadow-xl shadow-black/50 p-5 mb-8">
                <p className=" mb-2 ">⭐⭐⭐⭐⭐</p>
                <div className=" flex items-center">
                  <Image src="/images/andrew.jpg" width={50} height={50} alt="Testimonial Avatar Picture"></Image>
                  <p className=" pl-2 ">- Andrew</p>
                </div>
                <p className=" mt-2">&#34;I ordered the Greek Salad and it was so fresh!&#34;</p>
              </div>
              <div className=" bg-white shadow-xl shadow-black/50 p-5 mb-8">
                <p className=" mb-2 ">⭐⭐⭐⭐⭐</p>
                <div className=" flex items-center">
                  <Image src="/images/Maria.jpg" width={50} height={50} alt="Testimonial Avatar Picture"></Image>
                  <p className=" pl-2 ">- Maria</p>
                </div>
                <p className=" mt-2">&#34;I was feeling up to a little dessert so I tried their lemon cake and it was so good!&#34;</p>
              </div>
              <div className=" bg-white shadow-xl shadow-black/50 p-5 mb-8">
                <p className=" mb-2 ">⭐⭐⭐⭐⭐</p>
                <div className=" flex items-center">
                  <Image src="/images/Monique.jpg" width={50} height={50} alt="Testimonial Avatar Picture"></Image>
                  <p className=" pl-2 ">- Monique</p>
                </div>
                <p className=" mt-2">
                  &#34;I ordered a Gyro without some of the ingredients on it and they gave me options to substitue, super nice restaurant!&#34;
                </p>
              </div>
              <div className=" bg-white shadow-xl shadow-black/50 p-5 mb-8">
                <p className=" mb-2 ">⭐⭐⭐⭐⭐</p>
                <div className=" flex items-center">
                  <Image src="/images/Thomas.jpg" width={50} height={50} alt="Testimonial Avatar Picture"></Image>
                  <p className=" pl-2 ">- Thomas</p>
                </div>
                <p className=" mt-2">&#34;My waiter was super dope, got everything for us when we needed it. Thanks Jimmy!&#34;</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about-us" className=" pt-14 pb-14 mt-32 lg:mt-64 px-4 md:px-24 lg:px-40 xl:px-52 2xl:px-72">
          <div className="grid lg:flex justify-between">
            <div className=" lg:w-1/3">
              <h2 className=" mb-8 text-2xl font-mono font-bold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">About Owners</h2>
              <p className=" font-mono mb-4 lg:mb-12 xl:text-lg 2xl:text-xl">
                Mario and Adrian are the passionate owners of Little Lemon, a vibrant Mediterranean restaurant. With a shared love for the rich flavors and
                diverse culinary traditions of the Mediterranean region, Mario and Adrian are committed to creating an unforgettable dining experience for their
                guests. At Little Lemon, every meal is an opportunity to savor the flavors of the Mediterranean and create cherished memories that will last a
                lifetime.
              </p>
            </div>
            <div className=" pl-6 mt-12  mx-auto lg:mx-0  relative lg:mt-0 lg:pt-8 xl:pt-8 2xl:pt-0 ">
              <Image src="/images/Mario and Adrian b.jpg" width={300} height={300} alt="Cooking Image" className=" z-0 xl:w-96 w-auto relative"></Image>
              <Image
                src="/images/Mario and Adrian A.jpg"
                width={300}
                height={300}
                alt="Cooking Image"
                className=" z-10 -mt-4 -ml-6 lg:-mt-8 lg:-ml-16 lg:2xl:-ml-36 xl:w-96  w-auto relative"
              ></Image>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
