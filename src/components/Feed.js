import React from 'react';
import "./styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
    return (
        <div className="feed">
            <div  className="feed__header">
                <h2>This is a home</h2>
            </div>
        {/*    header   */}

        {/*    tweet box*/}
            <TweetBox />

            <Post />
        </div>
    );
};

export default Feed;
