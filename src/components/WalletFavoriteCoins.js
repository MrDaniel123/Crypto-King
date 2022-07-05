import { useContext } from 'react';

import styled from 'styled-components';

import FavoriteCoin from './FavoriteCoin';

import { ExchangeWalletContext } from '../context/ExchangeWalletContext';

const WalletFavoriteCoins = () => {
	const { myFavoriteCoins, setMyFavoriteCoins } = useContext(
		ExchangeWalletContext
	);

	let myFavoriteCoinsCopy = [...myFavoriteCoins];

	const handleDeleteElementFromFavorite = name => {
		const favoriteCoinIndex = myFavoriteCoinsCopy.findIndex(coin => {
			if (coin.name === name) {
				return true;
			} else return false;
		});

		myFavoriteCoinsCopy.splice(favoriteCoinIndex, 1);

		setMyFavoriteCoins(myFavoriteCoinsCopy);
	};

	const favoriteIconComponents = myFavoriteCoins.map(coin => {
		return (
			<FavoriteCoin
				icon={coin.icon}
				name={coin.name}
				deleteElementFromFavorite={handleDeleteElementFromFavorite}
			/>
		);
	});
	return (
		<FavoriteCoinsWrapper>
			<Header>You Favorite Coins</Header>

			{favoriteIconComponents}
		</FavoriteCoinsWrapper>
	);
};

const FavoriteCoinsWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 200px;

	background: linear-gradient(90deg, #bebebe 0.63%, #300031 100%);
	box-shadow: 0px 1px 2px #000000, inset 0px 0px 4px #000000;
	border-radius: 11px;
`;

const Header = styled.h4`
	color: #fff;
	font-size: 18px;
	font-weight: bold;

	margin: 10px;
`;

export default WalletFavoriteCoins;
