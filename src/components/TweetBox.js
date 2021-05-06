import React from 'react';
import "./styles/TweetBox.css";
import {Button, Avatar} from "@material-ui/core";

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" />
                    <input type="text" placeholder="What's happening?"/>
                    {/*<input type="text" placeholder="Enter image URL"/>*/}
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;
