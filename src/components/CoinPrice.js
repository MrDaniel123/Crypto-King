import styled from 'styled-components';

const CoinPrice = props => {
	const { price, change, iconUrl } = props.coinData;

	let fontColor;
	let wrapColor;

	const handleFormatterPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	if (Number(change) < 0) {
		fontColor = '#FF0000';
		wrapColor = 'rgba(255,0,0,20%)';
	} else if (Number(change) > 0) {
		fontColor = '#05FF00';
		wrapColor = 'rgba(0,255,87, 20%)';
	}

	return (
		<CoinPriceWrapper>
			<Img src={iconUrl} alt='Coin Icon' />

			<Price>{handleFormatterPrice.format(price)}</Price>
			<ChangeWrap color={wrapColor}>
				<Change color={fontColor}>{change}%</Change>
			</ChangeWrap>
		</CoinPriceWrapper>
	);
};

const CoinPriceWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: 180px;
	width: 140px;
	margin-top: 15px;
`;

const Img = styled.img`
	height: 90px;
	width: 90px;
`;

const Price = styled.p`
	width: 100%;
	text-align: center;
	color: #fff;
	font-size: 24px;
`;

const ChangeWrap = styled.div`
	width: 70px;
	height: 30px;
	border-radius: 25px;
	font-size: 18px;
	background-color: ${props => props.color || 'rgba(231, 231, 231, 20%)'};
`;

const Change = styled.p`
	width: 100%;
	text-align: center;
	line-height: 30px;
	color: ${props => props.color || '#A1A1A1'};
`;

export default CoinPrice;
