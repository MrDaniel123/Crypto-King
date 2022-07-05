import styled from 'styled-components';

const WalletListCoins = ({ myCoins }) => {
	const coinList = myCoins.map(coin => {
		return (
			<CoinWrapper key={coin.name}>
				<CoinIcon src={coin.icon} alt='Coin icon' />
				<CoinName>{coin.name}</CoinName>

				<PriceWrapper>
					<p>{coin.value}</p>
				</PriceWrapper>
			</CoinWrapper>
		);
	});

	return (
		<WallteListCoinsWrapper>
			<SectionName>You Coins</SectionName>
			{coinList}
		</WallteListCoinsWrapper>
	);
};

const SectionName = styled.p`
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	margin: 10px;
`;

const WallteListCoinsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 320px;

	margin-bottom: 20px;

	background: linear-gradient(90deg, #bebebe 0.63%, #300031 100%);
	box-shadow: 0px 1px 2px #000000, inset 0px 0px 4px #000000;
	border-radius: 11px;
`;

const CoinWrapper = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;
	grid-template-columns: repeat(5, 1fr);
	width: 90%;

	margin-bottom: 5px;
`;

const CoinIcon = styled.img`
	grid-column: 1/2W;
	height: 25px;
	width: 25px;
`;

const CoinName = styled.p`
	font-weight: bold;
	color: #fff;
`;

const PriceWrapper = styled.div`
	grid-column: 3/6;
	width: 140px;
	height: 30px;
	margin: 5px;

	background: rgba(217, 217, 217, 0.17);
	border-radius: 54px;

	& > p {
		color: #fff;
		text-align: center;
		line-height: 30px;
	}
`;

export default WalletListCoins;
