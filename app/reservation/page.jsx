"use client";

import React, { useState } from "react";

const Reservation = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    //Form reset
    e.preventDefault();
    // setName("");
    // setDate("");
    // setTime("");
    // setGuests("");
    // setOccasion("");
    // setPhone("");

    const formHidden = document.getElementById("my-form");
    formHidden.classList.add("hidden");

    const submissionShow = document.getElementById("submission-success");
    submissionShow.classList.remove("hidden");
  };

  return (
    <>
      <main>
        <section className=" pt-28 pb-28 mt-16 bg-ll-primaryGreen">
          <h1 className=" text-center font-sans text-5xl xl:text-6xl 2xl:text-7xl text-ll-primaryYellow">Reserve A Table</h1>
        </section>
        <form
          id="my-form"
          action=""
          className=" font-mono text-lg mx-auto w-11/12 md:w-3/4 lg:w-2/4 xl:w-1/3 justify-center p-8 mt-16 mb-32  bg-ll-primaryGreen  shadow-xl shadow-black/50 rounded-2xl "
          onSubmit={handleSubmit}
        >
          <div className=" ">
            <fieldset className="grid mb-8">
              <label htmlFor="name" className="text-white mb-1">
                Name:
              </label>
              <input type="text" id="name" placeholder="Your Name" className="p-2  " required value={name} onChange={(e) => setName(e.target.value)} />
            </fieldset>
            <fieldset className="grid mb-8">
              <label htmlFor="number" className="text-white mb-1">
                Phone Number:
              </label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="1-888-888-8888"
                min={11}
                max={14}
                className="p-2 "
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </fieldset>
            <fieldset className="grid  mb-8">
              <label htmlFor="res-date" className=" text-white mb-1">
                Choose Date:
              </label>
              <input type="date" id="res-date" className="p-2 " value={date} onChange={(e) => setDate(e.target.value)} required />
            </fieldset>
            <fieldset className="grid mb-8">
              <label htmlFor="res-time" className=" text-white mb-1">
                Choose Time:
              </label>
              <select id="res-time" className="p-2 " value={time} onChange={(e) => setTime(e.target.value)} required>
                <option></option>
                <option>4:00 P.M.</option>
                <option>5:00 P.M.</option>
                <option>6:00 P.M.</option>
                <option>7:00 P.M.</option>
                <option>8:00 P.M.</option>
                <option>9:00 P.M.</option>
                <option>10:00 P.M.</option>
              </select>
            </fieldset>
            <fieldset className="grid mb-8">
              <label htmlFor="guests" className=" text-white mb-1">
                Number of guests:
              </label>
              <select name="guests" id="guests" className="p-2 " required value={guests} onChange={(e) => setGuests(e.target.value)}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </fieldset>
            <fieldset className="grid mb-8">
              <label htmlFor="occasion" className="text-white mb-1">
                Occasion:
              </label>
              <select name="occasion" id="occasion" className="p-2 " required value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option></option>
                <option>Family Dinner</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
              </select>
            </fieldset>
            <fieldset className="grid mb-8">
              <label htmlFor="comments" className="text-white mb-1">
                Additional Comments:
              </label>
              <textarea name="comments" id="comments" cols="10" rows="3"></textarea>
            </fieldset>

            <fieldset className="grid">
              <input
                id="submission"
                type="submit"
                value="Make Your Reservation"
                className="text-black bg-white px-5 py-2  hover:bg-ll-primaryGreen hover:border-2 hover:border-white hover:text-white disabled:bg-opacity-25 "
                disabled={(!name, !date, !time)}
              />
            </fieldset>
          </div>
        </form>
        <div
          id="submission-success"
          className="bg-ll-primaryGreen p-14 mt-64 mb-64  shadow-xl shadow-black/50  text-center text-white font-mono text-xl w-11/12 md:w-1/2 xl:w-1/3 mx-auto rounded-2xl  hidden"
        >
          <p className="mb-4 text-ll-primaryYellow text-2xl">Thanks {name} for reserving a table with Little Lemon!</p>
          <p className="mb-2">Number of Guests: {guests}</p>
          <p className="mb-2">Date: {date}</p>
          <p className="mb-2">At: {time}</p>
        </div>
      </main>
    </>
  );
};

export default Reservation;
