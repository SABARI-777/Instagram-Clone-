import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom';

function SideBar() {

  const navigate = useNavigate();

  return (
    <div className="m-3 position-fixed">
    <div className='d-flex flex-column gap-3'>
        <img className="logo" src="\public\assets\instagram-text.png "/>
        <div> <i className="bi bi-house"></i> Home</div>
        <div> <i className="bi bi-search"></i> Search</div>
        <div > <i className="bi bi-compass"></i> Explore</div>
        <div> <i className="bi bi-play-btn"></i> Reels</div>
        <div > <i className="bi bi-chat-left"></i> Messages</div>
        <div > <i className="bi bi-bell-fill"></i> Notifications</div>
        <div > <i className="bi bi-plus-square"></i> Create</div>
        <div onClick={()=>{navigate("/profile")}}> <i className="bi bi-person-circle"></i> Profile</div>
    </div>
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 m-3' > 
        <div> <i className="bi bi-threads"></i> Threads</div>
        <div> <i className="bi bi-three-dots"></i> More</div>
    </div>

    </div>
  )
}

export default SideBar;