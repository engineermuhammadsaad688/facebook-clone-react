import React from 'react'
import { FaSearch } from "react-icons/fa"; // icon import karna

const Navbar = () => {
  return (
    <>
    <div className='main-container '>
      <div className='nav-left'>
        <img src='images/logo.png' className='logo' />
        <div className='images'>
          <img src='images/notification.png' />
          <img src='images/inbox.png' />
          <img src='images/video.png' />
        </div>

      </div>
      <div className='nav-right'>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        borderRadius: "30px",
        padding: "11px 12px",
        width: "300px",
        boxSizing:"border-box"
      }}
    >
      <FaSearch style={{ color: "#555", marginRight: "8px", fontSize: "14px" }} />
      <input
        type="text"
        placeholder="Search"
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: "14px",
          flex: 1,
          color: "#555",
        }}
      />
    </div>

        <div className='nav-user-icon online'>
          <img src='./images/profile-pic.png'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar