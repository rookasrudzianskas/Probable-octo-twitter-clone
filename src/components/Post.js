import React from 'react';
import "./styles/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" />

            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Rookas Rudzianskas {" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @roookas
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, pariatur?</p>
                    </div>
                </div>
                    <img src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" alt=""/>
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
    );
};

export default Post;
