import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdPostAdd, MdDone, MdDelete, MdViewList } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import AddTask from "./AddTask";

const MainComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);
  

  const handleAddTaskClick = () => {
    setShowAddTask(true);
  };
  const handleCloseAddTask = () => {
    setShowAddTask(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/tasks")
      .then((response) => {
        const tasksData = response.data;
        setTasks(tasksData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleViewDetails = (task) => {
    setSelectedTask(task);
  };

  const handleCloseDetails = () => {
    setSelectedTask(null);
  };

  //delete
  const handleDeleteTask = async (taskId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/tasks/${taskId}`
      );

      if (response.status === 200) {
        // Task deleted successfully
        console.log("Task deleted:", taskId);
        // Update the tasks list
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      } else {
        // Handle error response
        console.log("Failed to delete task");
      }
    } catch (error) {
      // Handle network error
      console.log("Error:", error);
    }
  };

  return (
    <div className="m-10" style={{ height: "600px", width: "740px" }}>
      {showAddTask && <AddTask onClose={handleCloseAddTask} />}
      <h1 className="font-bold text-2xl">Today</h1>
      <div
        className="flex text-white bg-gray-800 text-2xl mt-5 p-2 cursor-pointer rounded shadow"
        onClick={handleAddTaskClick}
      >
        <MdPostAdd />
        <span>Add New Task</span>
      </div>
      <ul className="text-2xl">
        {tasks.map((task) => (
          <div key={task.id} className="flex justify-between">
            <li>{task.title}</li>
            <li className="flex">
              <li>
                <MdDone className="text-green-500 hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </li>
              <li>
                <BiEdit className="text-orange-500 hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </li>
              <li>
                <MdViewList
                  className="text-gray-500 hover:scale-125 transition-transform duration-300 cursor-pointer"
                  onClick={() => handleViewDetails(task)}
                />
              </li>
              <li>
                <MdDelete
                  className="text-red-500 hover:scale-125 transition-transform duration-300 cursor-pointer"
                  onClick={() => handleDeleteTask(task.id)}
                />
              </li>
            </li>
          </div>
        ))}
      </ul>

      {selectedTask && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-2">{selectedTask.title}</h2>
            <hr />
            <p className="text-gray-600 mb-4">{selectedTask.description}</p>
            <p className="text-gray-600 mb-4">
              Date & Time: {selectedTask.dateTime}
            </p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainComponent;
