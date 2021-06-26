import React, { useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');

    useEffect(() =>{
        setSelectedVideo(videos[0])
    }, [videos]);   

    //Make inline
    // const onVideoSelect = (video) => {
    //     setSelectedVideo(video);        
    // };

    //Short-hand notation for inline
    //(video) => setSelectedVideo(video)

    //when the passed function argument is being referenced inside the function block
    //can simply use shorthand notation:

    //** setSelectedVideo */

    return(
        <div className="ui container" >
                <SearchBar onFormSubmit={search} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="5 wide column">
                            <VideoList 
                                onVideoSelect={setSelectedVideo} 
                                videos={videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default App;