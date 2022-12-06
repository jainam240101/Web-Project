import axios from 'axios';

//axios instance to base url
const instance = axios.create({
    baseURL: "http://localhost:5001/api"
});

export default instance;