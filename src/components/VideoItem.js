import './VideoItem.css';
import React from 'react';

// const VideoItem = (props) => {
//     //props.video.snippet.tittle
//     return (
//         <div>
//             Video Item
//         </div>
//     );
// };

//Destructered new syntax
const VideoItem = ({ video, onVideoSelect }) => {
    //props.video.snippet.tittle
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img 
                alt={video.snippet.title} 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
            />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>            
        </div>
    );
};


export default VideoItem;