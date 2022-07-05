import styled from 'styled-components';

import chartsNochange from '../assets/chartsNoChange.png';
import chartsMinus from '../assets/chartsMinus.png';
import chartsPlus from '../assets/chartsPlus.png';

const LitteCoin = props => {
	const { symbol, change, price, marketCap, iconUrl } = props.coinData;
	let color = false;
	let charts = chartsNochange;
	let formaterChange = [...change];

	// console.log(change);
	if (change === '-0.00') {
		formaterChange = formaterChange.slice(1, 5);
	}

	if (Number(change) < 0) {
		color = '#FF0000';
		charts = chartsMinus;
	} else if (Number(change) > 0) {
		color = '#33FF00';
		charts = chartsPlus;
	}

	const handleFormatterPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	return (
		<LitteCoinWrapper>
			<CoinIcon src={iconUrl} alt='Coin Icon' />
			<CoinShortName>{symbol}</CoinShortName>
			<CoinPriceChange $color={color}>{formaterChange}%</CoinPriceChange>

			<CoinCharts src={charts} alt='Charts' />
			<CoinPrice>{handleFormatterPrice.format(price)}</CoinPrice>
			<CoinMarketCap>{handleFormatterPrice.format(marketCap)}</CoinMarketCap>
		</LitteCoinWrapper>
	);
};

const LitteCoinWrapper = styled.div`
	display: grid;
	grid-template-columns: 65px repeat(6, 1fr);
	grid-template-rows: repeat(2, 1fr);
	align-items: center;
	justify-items: center;
	width: 320px;
	height: 60px;
	margin-bottom: 27px;
	cursor: pointer;

	border-radius: 15px;
	background: linear-gradient(
		90deg,
		rgba(131, 94, 0, 0.2) 0%,
		rgba(0, 0, 0, 0.76) 54.69%,
		#5e4040 100%
	);
	box-shadow: inset 1px -2px 10px -1px #000000;
`;

const CoinIcon = styled.img`
	grid-column: 0/1;
	grid-row: 1/3;
	width: 45px;
	height: 45px;
	border-radius: 11px;
`;

const CoinShortName = styled.h3`
	grid-column: 2/3;
	grid-row: 1/2;
	font-size: 18px;
	margin-top: 10px;

	color: #ffffff;
	font-weight: bold;
`;

const CoinPriceChange = styled.p`
	grid-column: 2/3;
	grid-row: 2/3;
	font-size: 12px;
	margin-bottom: 10px;

	color: ${props => props.$color || '#818181'};
`;

const CoinCharts = styled.img`
	grid-column: 3/6;
	grid-row: 1/3;
	height: 42px;
	width: 100px;
`;

const CoinPrice = styled.p`
	grid-column: 6/8;
	grid-row: 1/2;
	font-size: 14px;
	margin-top: 10px;

	color: #ffffff;
`;

const CoinMarketCap = styled.p`
	grid-column: 6/8;
	grid-row: 2/3;
	font-size: 8px;
	margin-bottom: 10px;

	color: #c2c2c2;
`;

export default LitteCoin;
