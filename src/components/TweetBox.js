import React, {useState} from 'react';
import "./styles/TweetBox.css";
import {Button, Avatar} from "@material-ui/core";

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState('');

    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" />
                    <input type="text" placeholder="What's happening?"/>

                </div>
                <input className="tweetBox__imageInput" type="text" placeholder="Enter image URL"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;
