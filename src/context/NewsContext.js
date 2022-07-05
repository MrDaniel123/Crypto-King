import { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const NewsContext = createContext();

const API_KEY = process.env.REACT_APP_NEWS_KEY;

const NewsPrivider = ({ children }) => {
	const [newsIsLoaded, setNewsIsLoaded] = useState(false);
	const [newsData, setNewsData] = useState();

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://free-news.p.rapidapi.com/v1/search',
			params: { q: 'Cryptocurrency', lang: 'en' },
			headers: {
				'X-RapidAPI-Key': `${API_KEY}`,
				'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				setNewsData(response.data);
				setNewsIsLoaded(true);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	return (
		<NewsContext.Provider value={{ newsData, newsIsLoaded }}>
			{children}
		</NewsContext.Provider>
	);
};

export default NewsPrivider;
