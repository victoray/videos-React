import axios from 'axios';


const KEY = 'AIzaSyDh_hA7QRjFk6_ByFtrIxHenHBmM-s7zpo';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        maxResults: 5
    }
});