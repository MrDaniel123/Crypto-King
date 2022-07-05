import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CryptoDataContext = createContext();

const API_KEY = process.env.REACT_APP_API_KEY;

const CryptoDataPrivider = ({ children }) => {
	const [isLoaded, setIsLoaded] = useState();
	const [coinsData, setCoinsData] = useState();

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://coinranking1.p.rapidapi.com/coins',
			params: {
				referenceCurrencyUuid: 'yhjMzLPhuIDl',
				timePeriod: '3h',
				'tiers[0]': '1',
				orderBy: 'marketCap',
				orderDirection: 'desc',
				limit: '100',
				offset: '0',
			},
			headers: {
				'X-RapidAPI-Key': `${API_KEY}`,
				'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				setCoinsData(response.data);
				setIsLoaded(true);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	return (
		<CryptoDataContext.Provider value={{ coinsData, isLoaded }}>
			{children}
		</CryptoDataContext.Provider>
	);
};

export default CryptoDataPrivider;
