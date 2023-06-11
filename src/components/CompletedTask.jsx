import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { TiDelete } from "react-icons/ti";
import { useReactToPrint } from "react-to-print";

const CompletedTask = () => {
  const [tasks, setTasks] = useState([]);

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/completedtasks/${taskId}`
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

  useEffect(() => {
    axios
      .get("http://localhost:8000/completedtasks")
      .then((response) => {
        const tasksData = response.data;
        setTasks(tasksData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div
      className="bg-gray-800 text-green-500 rounded shadow m-10"
      style={{ height: "600px", width: "400px" }}
    >
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl mx-5">Completed Task:</h1>
        <button
          onClick={handlePrint}
          className="text-white bg-red-500 hover:bg-red-600 rounded m-2 p-2"
        >
          Print
        </button>
      </div>
      <hr />

      <div className="mx-5 flex" ref={componentRef}>
        <ul>
          {tasks.map((task) => (
            <div key={task.id} className="flex justify-between">
              <li>{task.title}</li>
              <li className="flex">
                <li className="text-red-500 text-2xl font-bold cursor-pointer">
                  <TiDelete onClick={() => handleDeleteTask(task.id)} />
                </li>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompletedTask;
