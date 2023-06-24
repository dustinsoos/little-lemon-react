"use client";

import React from "react";
import { useState } from "react";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setEmail("");
    setPassword("");
    setConPassword("");

    const formHidden = document.getElementById("signup-form");
    formHidden.classList.add("hidden");

    const h1Hidden = document.getElementById("signup-text");
    h1Hidden.classList.add("hidden");

    const submissionShow = document.getElementById("signup-success");
    submissionShow.classList.remove("hidden");
  };

  console.log(email);
  return (
    <>
      <main>
        <section id="signup-text" className=" pt-28 pb-28 mt-16 bg-ll-primaryGreen">
          <h1 className="  text-center font-sans text-5xl xl:text-6xl 2xl:text-7xl text-ll-primaryYellow">Sign Up</h1>
        </section>
        <form
          id="signup-form"
          action=""
          className=" grid font-mono text-lg mx-auto w-11/12 md:w-3/4 lg:w-2/4 xl:w-1/3 p-8 mt-16 mb-32  bg-ll-primaryGreen  shadow-xl shadow-black/50 rounded-2xl "
          onSubmit={handleSubmit}
        >
          <div className=" ">
            <fieldset className="grid mb-8">
              <label htmlFor="email" className="text-white mb-1">
                Email:
              </label>
              <input
                type="text"
                id="email"
                placeholder="example@gmail.com"
                className="p-2  "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className="grid mb-8">
              <label htmlFor="email" className="text-white mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="p-2 "
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="email" className="text-white mb-1">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="p-2  "
                required
                value={conpassword}
                onChange={(e) => setConPassword(e.target.value)}
              />
            </fieldset>
            <fieldset className="grid">
              <input
                id="submission"
                type="submit"
                value="Sign Up"
                className="text-black bg-white px-5 py-2  hover:bg-ll-primaryGreen hover:border-2 hover:border-white hover:text-white disabled:bg-opacity-25 "
                disabled={(!email, !password, !conpassword)}
              />
            </fieldset>
          </div>
        </form>
        <section className="h-screen">
          <div
            id="signup-success"
            className=" bg-ll-primaryGreen p-14 mt-64 mb-64  shadow-xl shadow-black/50  text-center text-white font-mono text-xl w-11/12 md:w-1/2 xl:w-1/3 mx-auto rounded-2xl  hidden "
          >
            <p className="mb-4 text-ll-primaryYellow text-2xl">Welcome! An email confirmation will be sent to {email} </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default signup;
