import React from 'react';
import "./styles/SidebarOption.css";


const SidebarOption = ({ text, Icon }) => {
    return (
        <div className="sidebarOption">
            <h2>{text}</h2>
        </div>
    );
};

export default SidebarOption;
