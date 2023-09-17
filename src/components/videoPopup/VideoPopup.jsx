import React from "react";
import ReactPlayer from "react-player/youtube"; // library 

import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`} //static variable
                    controls //enable function
                    width="100%"
                    height="100%"
                    // playing={true}  //auto play
                />
            </div>
        </div>
    );
};

export default VideoPopup;