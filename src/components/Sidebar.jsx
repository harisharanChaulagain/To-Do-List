import React from "react";
import { GoThreeBars } from "react-icons/go";
import { MdUpcoming } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";

const Sidebar = () => {
  return (
    <div
      className="bg-gray-800 text-white rounded shadow m-10"
      style={{ height: "600px", width: "200px" }}
    >
      <div className="flex items-center justify-between p-4">
        <h1>Task</h1>
        <div className="ml-2">
          <GoThreeBars />
        </div>
      </div>
      <ul className="p-4">
        <li className="flex justify-between ">
          <div>
            <MdCalendarToday />
          </div>
          <div>Upcoming</div>
          <div>10</div>
        </li>

        <li className="flex justify-between ">
          <div>
            <MdUpcoming />
          </div>
          <div>Today</div>
          <div>5</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
