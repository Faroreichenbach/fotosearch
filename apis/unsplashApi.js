import axios from 'axios';

//Instance of Unsplash API with basic configuration.
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
    }
});