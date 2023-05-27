import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import axios from "axios";

const AddTask = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Print the values to the console
  //   console.log("Title:", title);
  //   console.log("Description:", description);
  //   console.log("Date & Time:", dateTime);

  //   // Clear the input fields
  //   setTitle("");
  //   setDescription("");
  //   setDateTime("");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      dateTime,
    };

    try {
      const response = await axios.post("http://localhost:8000/tasks", newTask);

      if (response.status === 201) {
        // Task added successfully
        console.log("Task added:", newTask);
        // Clear the input fields
        setTitle("");
        setDescription("");
        setDateTime("");
      } else {
        // Handle error response
        console.log("Failed to add task");
      }
    } catch (error) {
      // Handle network error
      console.log("Error:", error);
    }
  };



  return (
    <div className="shadow-2xl m-4 rounded">
      <div className="flex justify-between text-2xl font-bold p-4">
        <h1>Add New Task</h1>
        <GrClose className="cursor-pointer" onClick={onClose} />
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-4">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            className="bg-slate-100 rounded p-2"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex flex-col p-4">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            className="bg-slate-100 rounded p-2"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="p-4">
          <label htmlFor="dateTime">Date & Time:</label>
          <input
            type="datetime-local"
            id="dateTime"
            value={dateTime}
            onChange={handleDateTimeChange}
          />
        </div>
        <hr />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 rounded text-2xl text-white m-4 p-2 hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
