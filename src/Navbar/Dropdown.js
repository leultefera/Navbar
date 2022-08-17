import React, { useState, useRef } from 'react';

// Dynamically inserted dropdown menu
export default function Dropdown() {
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