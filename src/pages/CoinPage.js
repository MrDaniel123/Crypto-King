import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Styled from 'styled-components';

import { CryptoDataContext } from '../context/CryptoDataContext';
import { ExchangeWalletContext } from '../context/ExchangeWalletContext';

import CoinHeaders from '../components/CoinHeaders';
import CoinPrice from '../components/CoinPrice';
import MediumCharts from '../components/MediumCharts';
import ExchangeCoin from '../components/ExchangeCoin';

import heart from '../assets/Heart.png';
import heartGrey from '../assets/HeartGrey.png';

const CoinPage = () => {
	const { coinsData, isLoaded } = useContext(CryptoDataContext);
	const { myFavoriteCoins, setMyFavoriteCoins } = useContext(
		ExchangeWalletContext
	);
	const { coinId } = useParams();
	let thisCoinIsFavorite = false;
	let myFavoriteCoinsCopy = [...myFavoriteCoins];

	if (isLoaded) {
		const [thisCoin] = coinsData.data.coins.filter(coin => {
			if (coin.uuid === coinId) {
				return true;
			} else {
				return false;
			}
		});

		const thisCoinFavorite = myFavoriteCoins.filter(favoriteCoin => {
			if (favoriteCoin.name === thisCoin.symbol) {
				return favoriteCoin;
			} else return false;
		});

		if (thisCoinFavorite.length > 0) {
			thisCoinIsFavorite = true;
		}

		const handleSetFavoriteCoin = () => {
			if (thisCoinIsFavorite) {
				const favoriteCoinIndex = myFavoriteCoinsCopy.findIndex(coin => {
					if (coin.name === thisCoin.symbol) {
						return true;
					} else return false;
				});

				myFavoriteCoinsCopy.splice(favoriteCoinIndex, 1);
			} else {
				myFavoriteCoinsCopy.push({
					name: thisCoin.symbol,
					icon: thisCoin.iconUrl,
				});
			}

			setMyFavoriteCoins(myFavoriteCoinsCopy);
		};

		return (
			<>
				<CoinHeaders
					title={thisCoin.name}
					rightIcon={thisCoinIsFavorite ? heart : heartGrey}
					setFavoriteCoin={handleSetFavoriteCoin}
				/>
				<CoinPrice coinData={thisCoin} />
				<MediumCharts coinData={thisCoin} />
				<ExchangeCoin coinData={thisCoin} />
			</>
		);
	} else {
		return null;
	}
};

export default CoinPage;
