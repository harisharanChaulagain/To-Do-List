import React from "react";
import { MdPostAdd, MdDone, MdDelete, MdViewList } from "react-icons/md";
import {BiEdit} from "react-icons/bi";

const MainComponent = () => {
  return (
    <div className="m-10" style={{ height: "600px", width: "740px" }}>
      <h1 className="font-bold text-2xl">Today</h1>
      <div className="flex text-white bg-gray-800 text-2xl mt-5 p-2">
        <MdPostAdd />
        <span>Add New Task</span>
      </div>
      <ul className="text-2xl">
        <div>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </div>
        <div>
        <MdDone className="text-green-500 hover:scale-125 transition-transform duration-300 cursor-pointer" />
        <BiEdit className="text-orange-500 hover:scale-125 transition-transform duration-300 cursor-pointer"/>
        <MdViewList className="text-gray-500 hover:scale-125 transition-transform duration-300 cursor-pointer"/>
        <MdDelete className="text-red-500 hover:scale-125 transition-transform duration-300 cursor-pointer"/>
        </div>
      </ul>
    </div>
  );
};

export default MainComponent;
