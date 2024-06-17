import React from 'react';


const StickyNavbar = () => {
  return (
    <>
      <div className="sticky-navbar">
        <div className="navbar-left">
              <div className="navbar-item active">All Posts(32)</div>
          <div className="navbar-item">Article</div>
          <div className="navbar-item">Event</div>
          <div className="navbar-item">Education</div>
          <div className="navbar-item">Job</div>
        </div>
        <div className="navbar-right">
          <button className="write-post-button">Write a Post <i className="fa fa-caret-down" aria-hidden="true"></i></button>
          <button className="join-group-button"><i class="fa-solid fa-plus"></i><i class="fa-solid fa-user-group"></i> Join Group</button>
        </div>
       </div>
   
  
    </>
  );
}

export default StickyNavbar;
