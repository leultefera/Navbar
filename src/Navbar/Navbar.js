import './Navbar.css';

import React, { useState, useRef } from 'react';

function Navbar() {
  return (

    <Items>
      <Dropdown></Dropdown>
    </Items>

  );
}

// Items to be inserted inside the dropdown menu
function Items(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}



// Dynamically inserted dropdown menu

function Dropdown() {
  const [activeMenu, setActiveMenu] = useState('main');
  const dropdownRef = useRef(null);

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="menu">
        <h3 style={{ color: "white", fontFamily: "roboto" }}>Leul Tefera</h3>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Sign Out</DropdownItem>
      </div>
    </div>
  );
}

export default Navbar;
