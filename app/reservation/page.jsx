import React from "react";

const Reservation = () => {
  return (
    <>
      <form action="" className=" mx-auto w-3/4 lg:w-1/2 justify-center p-8 mt-32 mb-32 bg-ll-primaryGreen ">
        <fieldset className=" grid ">
          <label htmlFor="res-date" className=" text-white">
            Choose Date
          </label>
          <input type="date" id="res-date" className="" />
          <label htmlFor="res-time" className=" text-white">
            Choose Time
          </label>
          <select id="res-time">
            <option value="4">4:00 P.M.</option>
            <option value="4">5:00 P.M.</option>
            <option value="4">6:00 P.M.</option>
            <option value="4">7:00 P.M.</option>
            <option value="4">8:00 P.M.</option>
            <option value="4">9:00 P.M.</option>
            <option value="4">10:00 P.M.</option>
          </select>
        </fieldset>
        <fieldset></fieldset>
      </form>
    </>
  );
};

export default Reservation;
