import React from 'react'
import CompletedTask from "../components/CompletedTask";
import Sidebar from "../components/Sidebar";
import MainComponent from "../components/MainComponent";

const HomePage = () => {
  return (
    <div className="flex">
    <Sidebar />
    <MainComponent />
    <CompletedTask />
  </div>
  )
}

export default HomePage
