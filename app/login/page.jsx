import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <main className=" flex h-screen items-center">
        <div className=" mx-auto mb-32 mt-16 grid w-11/12 rounded-2xl bg-ll-primaryGreen p-16 font-mono   text-lg shadow-xl  shadow-black/50 md:w-3/4 lg:w-2/4 xl:w-1/3 ">
          <Link
            href="/login/dashboard"
            className="block rounded border-2 border-white bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen  "
          >
            Login
          </Link>
          <p className=" mb-10 text-white">Hint: To see dashboard click login.</p>
          <Link
            href="/signup"
            className="block rounded border-2 border-white bg-ll-primaryGreen px-4 py-2 text-center font-bold text-white hover:bg-white hover:text-ll-primaryGreen"
          >
            Sign Up
          </Link>
        </div>
      </main>
    </>
  );
};

export default Login;
