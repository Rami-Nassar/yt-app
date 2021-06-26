import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        setVideos(response.data.items);                
    };

    //React convention => return array
    return [videos, search];

    //More standard Javascript convention => return object
    //return { videos, onTermSubmit };
};

export default useVideos;
