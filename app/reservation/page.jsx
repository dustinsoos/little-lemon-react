"use client";

import React, { useState } from "react";

const Reservation = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    //Form reset
    e.preventDefault();
    // setName("");
    // setDate("");
    // setTime("");
    // setGuests("");
    // setOccasion("");
    // setPhone("");
    setIsSubmitted(true);
  };

  return (
    <>
      <main>
        <section className=" mt-16 bg-ll-primaryGreen pb-28 pt-28">
          <h1 className=" text-center font-sans text-5xl text-ll-primaryYellow xl:text-6xl 2xl:text-7xl">
            Reserve A Table
          </h1>
        </section>
        {!isSubmitted && (
          <form
            id="my-form"
            action=""
            className=" mx-auto mb-32 mt-16 w-11/12 justify-center rounded-2xl bg-ll-primaryGreen p-8 font-mono text-lg shadow-xl  shadow-black/50  md:w-3/4 lg:w-2/4 xl:w-1/3 "
            onSubmit={handleSubmit}
          >
            <div className=" ">
              <fieldset className="mb-8 grid">
                <label htmlFor="name" className="mb-1 text-white">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="p-2  "
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </fieldset>
              <fieldset className="mb-8 grid">
                <label htmlFor="number" className="mb-1 text-white">
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
              <fieldset className="mb-8  grid">
                <label htmlFor="res-date" className=" mb-1 text-white">
                  Choose Date:
                </label>
                <input
                  type="date"
                  id="res-date"
                  className="p-2 "
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset className="mb-8 grid">
                <label htmlFor="res-time" className=" mb-1 text-white">
                  Choose Time:
                </label>
                <select
                  id="res-time"
                  className="p-2 "
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                >
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
              <fieldset className="mb-8 grid">
                <label htmlFor="guests" className=" mb-1 text-white">
                  Number of guests:
                </label>
                <select
                  name="guests"
                  id="guests"
                  className="p-2 "
                  required
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
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
              <fieldset className="mb-8 grid">
                <label htmlFor="occasion" className="mb-1 text-white">
                  Occasion:
                </label>
                <select
                  name="occasion"
                  id="occasion"
                  className="p-2 "
                  required
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option></option>
                  <option>Family Dinner</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Other</option>
                </select>
              </fieldset>
              <fieldset className="mb-8 grid">
                <label htmlFor="comments" className="mb-1 text-white">
                  Additional Comments:
                </label>
                <textarea
                  name="comments"
                  id="comments"
                  cols="10"
                  rows="3"
                ></textarea>
              </fieldset>

              <fieldset className="grid">
                <input
                  id="submission"
                  type="submit"
                  value="Make Your Reservation"
                  className="bg-white px-5 py-2 text-black  hover:border-2 hover:border-white hover:bg-ll-primaryGreen hover:text-white disabled:bg-opacity-25 "
                  disabled={(!name, !date, !time)}
                />
              </fieldset>
            </div>
          </form>
        )}
        {isSubmitted && (
          <div
            id="submission-success"
            className="mx-auto mb-64 mt-32  w-11/12 rounded-2xl  bg-ll-primaryGreen p-14 text-center font-mono text-xl text-white shadow-xl shadow-black/50 md:w-1/2  xl:w-1/3"
          >
            <p className="mb-4 text-2xl text-ll-primaryYellow">
              Thanks {name} for reserving a table with Little Lemon!
            </p>
            <p className="mb-2">Number of Guests: {guests}</p>
            <p className="mb-2">Date: {date}</p>
            <p className="mb-2">At: {time}</p>
          </div>
        )}
      </main>
    </>
  );
};

export default Reservation;
