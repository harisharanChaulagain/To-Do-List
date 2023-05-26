import React from "react";
import {TiDelete} from "react-icons/ti";

const CompletedTask = () => {
  return (
    <div
      className="bg-gray-800 text-green-500 rounded shadow m-10"
      style={{ height: "600px", width: "400px" }}
    >
      <h1 className="font-bold text-2xl mx-5">Completed Task:</h1>

      <div className="mx-5 flex">
        <ul>
          <li>alkdsfni ifankdsfna </li>
        </ul>
        <ul className="text-red-500 text-2xl font-bold">
        <TiDelete/>
        </ul>
      </div>
    </div>
  );
};

export default CompletedTask;
