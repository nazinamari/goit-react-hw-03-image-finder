import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY= '28566237-c89de66335755423ec83ff5c2';

export const fetchData = async (q, page) => {
    const response = new URLSearchParams({
        key: API_KEY,
        image_type: 'all',
        orientation: 'horizontal',
        safesearch: 'true',
        order: 'latest',
        q,
        page,
        per_page: 12,
    });
    return await axios(`${BASE_URL}?${response}`)
};