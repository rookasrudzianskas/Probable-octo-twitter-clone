import React, {useState} from 'react';
import "./styles/TweetBox.css";
import {Button, Avatar} from "@material-ui/core";
import db from "../firebase";
const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    // console.log(tweetMessage)

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Rokas Rudzianskas",
            username: "byrookas",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"
        });


        setTweetMessage("");
        setTweetImage("");

    };

    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" />
                    <input onChange={e => setTweetMessage(e.target.value)}  value={tweetMessage} type="text" placeholder="What's happening?"/>

                </div>
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" type="text" placeholder="Enter image URL"/>
                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;
