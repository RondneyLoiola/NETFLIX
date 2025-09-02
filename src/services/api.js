import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key:'84a607966d49500964e39e6b35affb0e',
        language: 'pt-br',
        page: 1
    }
})

export default api