import React from 'react'
import "./index.css"
import "./SideBar"
import SideBar from './SideBar'
import Feed from './Feed'
import Suggestions from './Suggestions'

function App() {
  return (
    <div className="d-flex vh-100 ">
    <div className='w-20'><SideBar/></div>
    <div className="w-50"><Feed/></div>
    <div className='w-30'><Suggestions/></div>
    </div>
    )
}

export default App
//json-server --watch db.json --port 3000
