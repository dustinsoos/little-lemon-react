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
        <section
          id="signup-text"
          className=" mt-16 bg-ll-primaryGreen pb-28 pt-28"
        >
          <h1 className="  text-center font-sans text-5xl text-ll-primaryYellow xl:text-6xl 2xl:text-7xl">
            Sign Up
          </h1>
        </section>
        <form
          id="signup-form"
          action=""
          className=" mx-auto mb-32 mt-16 grid w-11/12 rounded-2xl bg-ll-primaryGreen p-8 font-mono text-lg shadow-xl  shadow-black/50  md:w-3/4 lg:w-2/4 xl:w-1/3 "
          onSubmit={handleSubmit}
        >
          <div className=" ">
            <fieldset className="mb-8 grid">
              <label htmlFor="email" className="mb-1 text-white">
                Email:
              </label>
              <input
                type="text"
                id="email"
                placeholder="example@gmail.com"
                className="p-2 required:border-red-500 "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className="mb-8 grid">
              <label htmlFor="email" className="mb-1 text-white">
                Password:
              </label>
              <input
                type="password"
                id="password"
                min={8}
                placeholder="Password"
                className="p-2 "
                required
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="email" className="mb-1 text-white">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="p-2 invalid:border-red-500 "
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
                className="bg-white px-5 py-2 text-black  hover:border-2 hover:border-white hover:bg-ll-primaryGreen hover:text-white disabled:bg-opacity-25 "
                disabled={(!email, !password, !conpassword)}
              />
            </fieldset>
          </div>
        </form>
        <section className="">
          <div
            id="signup-success"
            className=" mx-auto mb-64 mt-64 hidden  w-full rounded-2xl  bg-ll-primaryGreen p-14 text-center font-mono text-xl text-white shadow-xl shadow-black/50 md:w-1/2  xl:w-1/3 "
          >
            <p className="mb-4 text-center text-2xl text-ll-primaryYellow">
              Welcome! An email confirmation will be sent to{" "}
            </p>
            <p>{email}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default signup;
