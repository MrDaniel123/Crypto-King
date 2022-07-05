import styled from 'styled-components';

const MarketsInfo = props => {
	const handleFormatterPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	const { total24hVolume, totalCoins, totalMarketCap, totalMarkets } =
		props.marketsData;

	return (
		<MarketsInfoWrapper>
			<CoinPharagraph>
				Markets <br /> {totalMarkets}
			</CoinPharagraph>

			<MarketInfo>
				Market Cap <br /> {handleFormatterPrice.format(totalMarketCap)}
			</MarketInfo>
			<CoinPharagraph>
				Coin <br /> {totalCoins}
			</CoinPharagraph>
			<MarketInfo>
				Total 24h Volume <br /> {handleFormatterPrice.format(total24hVolume)}
			</MarketInfo>
		</MarketsInfoWrapper>
	);
};

const MarketsInfoWrapper = styled.div`
	display: grid;
	grid-template-columns: 40% 1fr;
	grid-template-rows: 1fr 1fr;
	align-items: center;
	justify-items: center;
	width: 320px;
	height: 150px;
	margin-top: 45px;
	margin-bottom: 45px;

	background: linear-gradient(90deg, #00326c 0%, #60002e 49.48%, #130000 100%);

	box-shadow: -4px 4px 10px #000000, inset 1px -2px 10px -1px #000000;
	border-radius: 36px;

	& > p {
		text-align: center;
		color: #ffffff;
		/* font-size: 15px; */
	}
`;

const CoinPharagraph = styled.p`
	background: linear-gradient(
		270deg,
		#00ffe0 0%,
		#ff14e8 46.32%,
		#ff0000 96.67%
	);
	font-weight: bold;
	font-size: 18px;

	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const MarketInfo = styled.p`
	font-size: 16px;
	font-weight: bold;

	background: linear-gradient(
		270deg,
		#ffb800 2.58%,
		#3326cc 50.78%,
		#6bff5f 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export default MarketsInfo;
