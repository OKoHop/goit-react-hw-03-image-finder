import axios from "axios";

const API_KEY = '38194976-66defdfa4125ae325cd0d496f';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPictures = async (search, page) => {
    const response = await axios.get('', {
        params: {
            key: API_KEY,
            per_page: 15,
            q: `${search}`,
            page: page,
        }
    })
    return response.data.hits
}