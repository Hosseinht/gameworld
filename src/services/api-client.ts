import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key: '8f6e5413d9c249f9acbaf44ac5be152e'
    }
})