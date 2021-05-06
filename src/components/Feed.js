import React, {useEffect, useState} from 'react';
import "./styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../firebase";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(() => {
        // is going to run once the feed component loads
        // this goes to the collection post, takes all the documents in the posts with all the data
        // and goes per each posts, and takes all the variables and son on, then marks them to the state
        db.collection('posts').onSnapshot(snapshot => {
            // console.log(snapshot);
            setPosts(snapshot.docs.map(doc => doc.data())) // an array of the posts
        })

    })

    return (
        <div className="feed">
            <div  className="feed__header">
                <h2>Home</h2>
            </div>
        {/*    header   */}

        {/*    tweet box*/}
            <TweetBox />

            <Post displayName="Rokas Rudzianskas" username="byrookas" verified text="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10" avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"/>

        </div>
    );
};

export default Feed;
