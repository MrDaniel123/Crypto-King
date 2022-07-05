import { useState, useContext } from 'react';
import styled from 'styled-components';

import { ExchangeWalletContext } from '../context/ExchangeWalletContext';

const ExchangeForm = ({ coinData }) => {
	const { myCoins, setMyCoins, myMoney, setMyMoney } = useContext(
		ExchangeWalletContext
	);
	const [exchangeValue, setExchangeValue] = useState('');

	let exchangeRateValue;

	let myCoinsCopy = [...myCoins];

	const exchangeRate = coinData.price;

	exchangeRateValue = (Number(exchangeValue) / Number(exchangeRate)).toFixed(4);

	const handleSetExchangeValue = e => {
		setExchangeValue(e.target.value);
	};

	const handleExchangeBuyCoin = () => {
		const currencyValue = myCoinsCopy.filter(myCoin => {
			if (myCoin.name === coinData.symbol) {
				return true;
			} else return false;
		});

		if (Number(exchangeValue) !== 0) {
			if (exchangeRateValue <= myMoney) {
				if (currencyValue.length > 0) {
					const myCoinsData = myCoinsCopy.map(coin => {
						if (coin.name === currencyValue[0].name) {
							coin.value = (
								Number(coin.value) + Number(exchangeRateValue)
							).toFixed(4);
							return coin;
						} else return coin;
					});
					setMyCoins(myCoinsData);
					console.log(myCoinsData);
				} else {
					myCoinsCopy.push({
						name: coinData.symbol,
						value: exchangeRateValue,
						icon: coinData.iconUrl,
					});
					setMyCoins(myCoinsCopy);
				}

				setMyMoney(prevMoney => prevMoney - exchangeValue);
			} else {
				console.log('Masz za mało pieniędzy');
			}
		}
	};

	return (
		<CurrencyExchange>
			<Currency>USD</Currency>
			<Input
				type='number'
				value={exchangeValue}
				onChange={e => handleSetExchangeValue(e)}
			/>

			<Moneyinput>{exchangeRateValue}</Moneyinput>
			<Currency>{coinData.symbol}</Currency>

			<ShoppingBtn onClick={handleExchangeBuyCoin}>buy</ShoppingBtn>
		</CurrencyExchange>
	);
};

const CurrencyExchange = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;

	width: 300px;
`;

const Input = styled.input`
	width: 80px;
	height: 30px;
	text-align: center;
	line-height: 30px;

	background: #dddddd;
	border: 1px solid #393939;
	box-shadow: inset 0px 0px 6px 1px #000000;
	border-radius: 6px;
`;

const Moneyinput = styled.p`
	width: 80px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	font-size: 14px;

	background: #dddddd;
	border: 1px solid #393939;
	box-shadow: inset 0px 0px 6px 1px #000000;
	border-radius: 6px;
`;

const Currency = styled.p`
	color: #fff;
	font-size: 14px;
	font-weight: bold;
`;

const ShoppingBtn = styled.button`
	all: unset;
	width: 60px;
	height: 30px;
	margin: 10px 10%;
	color: #fff;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	line-height: 30px;

	background: linear-gradient(134.48deg, #4400b3 1.67%, #000000 94.17%);
	box-shadow: -1px 2px 6px 1px #000000;
	border-radius: 9px;
`;

export default ExchangeForm;
