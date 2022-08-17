import './Navbar.css';
import Items from './Items';
import Dropdown from './Dropdown';
import React from 'react';

function Navbar() {
  return (

    <Items>
      <Dropdown></Dropdown>
    </Items>

  );
}

export default Navbar;
