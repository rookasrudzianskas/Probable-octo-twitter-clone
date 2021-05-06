import React from 'react';
import "./styles/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>

                <TwitterTweetEmbed tweetId={"1390145526071431172"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="byrookas"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/rokasrudzianskas"}
                    options={{ text: "#reactjs is awesome", via: "byrookas" }}
                />

            </div>
        </div>
    );
};

export default Widgets;
