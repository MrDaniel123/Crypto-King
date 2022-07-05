import { createContext, useState, useContext } from 'react';

import { CryptoDataContext } from './CryptoDataContext';

export const ExchangeWalletContext = createContext();

const ExchangeWalletProvider = ({ children }) => {
	const { isLoaded } = useContext(CryptoDataContext);

	const [myCoins, setMyCoins] = useState([
		{
			name: 'BTC',
			value: '0.00034',
			icon: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
		},
		{
			name: 'ETH',
			value: '1.45623',
			icon: 'https://cdn.coinranking.com/rk4RKHOuW/eth.svg',
		},
		{
			name: 'DOGE',
			value: '124.563',
			icon: 'https://cdn.coinranking.com/H1arXIuOZ/doge.svg',
		},
	]);

	const [myFavoriteCoins, setMyFavoriteCoins] = useState([
		{
			name: 'BTC',
			icon: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
		},
		{
			name: 'ETH',
			icon: 'https://cdn.coinranking.com/rk4RKHOuW/eth.svg',
		},
		{
			name: 'TRON',
			icon: 'https://cdn.coinranking.com/behejNqQs/trx.svg',
		},
		{
			name: 'Stellar',
			icon: 'https://cdn.coinranking.com/78CxK1xsp/Stellar_symbol_black_RGB.svg',
		},
	]);

	const [myMoney, setMyMoney] = useState('4000');

	if (isLoaded) {
		return (
			<ExchangeWalletContext.Provider
				value={{
					myCoins,
					setMyCoins,
					myMoney,
					setMyMoney,
					myFavoriteCoins,
					setMyFavoriteCoins,
				}}>
				{children}
			</ExchangeWalletContext.Provider>
		);
	} else {
		return null;
	}
};

export default ExchangeWalletProvider;
