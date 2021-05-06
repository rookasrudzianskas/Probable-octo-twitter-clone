import React, {useState} from 'react';
import "./styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
    const [posts, setPosts] = useState([])

    return (
        <div className="feed">
            <div  className="feed__header">
                <h2>Home</h2>
            </div>
        {/*    header   */}

        {/*    tweet box*/}
            <TweetBox />

            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas"  text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>
            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>

        </div>
    );
};

export default Feed;
