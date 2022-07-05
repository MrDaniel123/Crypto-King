import styled from 'styled-components';

const CoinValue = ({ value, coinName }) => {
	return (
		<MoneyValueWrapper>
			<NamesOfMoney>You {coinName} Coins</NamesOfMoney>
			<YouMoney>
				<Money>{value}</Money>
			</YouMoney>
		</MoneyValueWrapper>
	);
};

const MoneyValueWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 300px;
	height: 40px;
	/* margin: 15px 0; */

	background: linear-gradient(90deg, #828282 0.63%, rgba(48, 0, 49, 0.44) 100%);
	box-shadow: 0px 1px 2px #000000, inset 0px 0px 4px #000000;
	border-radius: 11px;
`;

const YouMoney = styled.div`
	width: 130px;
	height: 30px;
	margin-right: 5px;

	background: rgba(217, 217, 217, 0.17);
	border-radius: 54px;
`;

const NamesOfMoney = styled.p`
	font-size: 16px;
	font-weight: bold;
	text-align: center;
	margin-left: 10px;
`;

const Money = styled.p`
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	text-align: center;
	line-height: 30px;
`;

export default CoinValue;
