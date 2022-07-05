import { useContext } from 'react';

import styled from 'styled-components';

import { ExchangeWalletContext } from '../context/ExchangeWalletContext';

import MoneyValue from './MoneyValue';
import CoinValue from './CoinValue';
import ExchangeForm from './ExchangeForm';

const ExchangeCoin = ({ coinData }) => {
	const { myCoins, myMoney } = useContext(ExchangeWalletContext);

	let thisCoinValue = 0;

	const currencyValue = myCoins.filter(myCoin => {
		if (myCoin.name === coinData.symbol) {
			return true;
		} else return false;
	});

	if (currencyValue.length > 0) {
		const [coin] = currencyValue;
		thisCoinValue = coin.value;
	}

	return (
		<ExchangeCoinWrapper>
			<MoneyValue money={myMoney} description={'You Money'} />
			<CoinValue value={thisCoinValue} coinName={coinData.symbol} />

			<ExchangeForm coinData={coinData} />
		</ExchangeCoinWrapper>
	);
};

const ExchangeCoinWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: 220px;
	width: 320px;
	margin-top: 30px;
	margin-bottom: 125px;

	background: linear-gradient(
		90deg,
		rgba(131, 94, 0, 0.2) 0%,
		rgba(54, 54, 54, 0.76) 54.69%,
		#5e4040 100%
	);
	box-shadow: -2px 2px 4px #000000, inset 0px 0px 17px 2px #000000;
	border-radius: 15px;
`;

export default ExchangeCoin;
