import React from 'react'
import { FaSearch } from "react-icons/fa"; // icon import karna

const Navbar = () => {
  return (
    <div className='container'>
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
        width: "250px",
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

        <div className='Profile'>
          q
        </div>
      </div>
    </div>
  )
}

export default Navbar