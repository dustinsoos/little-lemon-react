import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <main className=" h-screen flex items-center">
        <div className=" grid p-16 font-mono text-lg mx-auto w-11/12 md:w-3/4 lg:w-2/4 xl:w-1/3   mt-16 mb-32  bg-ll-primaryGreen shadow-xl shadow-black/50 rounded-2xl ">
          <Link
            href="/login/dashboard"
            className="block border-2 text-center border-white bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen  "
          >
            Login
          </Link>
          <p className=" text-white mb-10">Hint: To see dashboard click login.</p>
          <Link
            href="/signup"
            className="block border-2 text-center border-white bg-ll-primaryGreen text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-ll-primaryGreen"
          >
            Sign Up
          </Link>
        </div>
      </main>
    </>
  );
};

export default Login;
