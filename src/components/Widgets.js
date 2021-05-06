import React from 'react';
import "./styles/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
            </div>
        </div>
    );
};

export default Widgets;
