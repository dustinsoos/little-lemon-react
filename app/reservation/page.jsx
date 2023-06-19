import React from "react";

const Reservation = () => {
  return (
    <>
      <form action="" className="grid justify-center pt-14 pb-14 mt-32 ">
        <fieldset className=" grid w-96 p-24 bg-slate-700">
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
