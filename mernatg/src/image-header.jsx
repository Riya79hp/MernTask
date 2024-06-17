import React, { useState } from 'react';
import StickyNavbar from './stickynavbar';
import Content from './content';

const Image = () => {
  const [joined, setJoined] = useState(false);

  const toggleJoinLeave = () => {
    setJoined(!joined);
  };

  return (
    <>
      <div className="image-header-div">
        <div className="image-header-icon">
          <i className="fas fa-arrow-left" style={{color:'white'}}></i>
        </div>
        <div className="text-container">
          <p className="title">Computer Engineering</p>
          <p className="subtitle">142,765 Computer Engineers follow this</p>
        </div>
        <div className="image-header-button">
          <button onClick={toggleJoinLeave} className="toggle-button">
            {joined ? "Leave Group" : "Join Group"}
          </button>
        </div>
      </div>
      <StickyNavbar />
      <Content />
    </>
  );
}

export default Image;
