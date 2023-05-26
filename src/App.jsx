import React from 'react'
import CompletedTask from './components/CompletedTask'
import Sidebar from './components/Sidebar'
import MainComponent from './components/MainComponent'
import AddTask from './components/AddTask'

const App = () => {
  return (
    <div className='flex'>
      {/* <Sidebar/>
      <MainComponent/>
      <CompletedTask/> */}
      <AddTask/>
    </div>
  )
}

export default App
