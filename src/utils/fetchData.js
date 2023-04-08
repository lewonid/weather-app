export const weatherOptions = {
    method: 'GET',
    // params: { q: '53.1,-0.13' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}