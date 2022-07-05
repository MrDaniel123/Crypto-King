import { useContext } from 'react';
import styled from 'styled-components';

import { CryptoDataContext } from '../context/CryptoDataContext';
import { ExchangeWalletContext } from '../context/ExchangeWalletContext';

import CoinHeaders from '../components/CoinHeaders';
import MoneyValueWallet from '../components/MoneyValueWallet';
import WalletListCoins from '../components/WalletListCoins';
import WalletFavoriteCoins from '../components/WalletFavoriteCoins';

import questionIcon from '../assets/Question.png';

const WalletPage = () => {
	const { isLoaded } = useContext(CryptoDataContext);
	const { myCoins, myMoney } = useContext(ExchangeWalletContext);

	if (!isLoaded) {
		return null;
	} else {
		return (
			<WalletPageWrapper>
				<CoinHeaders title='Wallet' rightIcon={questionIcon} />
				<MoneyValueWallet money={myMoney} description={'You Money'} />
				<WalletListCoins myCoins={myCoins} />

				<WalletFavoriteCoins />
			</WalletPageWrapper>
		);
	}
};

const WalletPageWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	padding-bottom: 120px;
`;

export default WalletPage;
