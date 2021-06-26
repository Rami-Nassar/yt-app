import axios from 'axios';

const KEY = 'AIzaSyBG5DCaDoTlv3lYb6ovz8QGJkHsLJ9pk9E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});