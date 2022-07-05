import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import arrow from '../assets/Arrow .png';

const CoinHeaders = ({ title, rightIcon, setFavoriteCoin }) => {
	return (
		<CoinHeadersWrapper>
			<LinkElem to='/'>
				<img src={arrow} alt='Go to home page' />
			</LinkElem>
			<h3>{title}</h3>

			<RightIconBtn onClick={setFavoriteCoin}>
				<img src={rightIcon} alt='Icon' />
			</RightIconBtn>
		</CoinHeadersWrapper>
	);
};

const CoinHeadersWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 320px;
	height: 40px;
	margin-top: 12px;

	background: linear-gradient(90deg, #bebebe 0.63%, #300031 100%);
	box-shadow: 0px 1px 2px #000000, inset 0px 0px 4px #000000;
	border-radius: 11px;
`;

const LinkElem = styled(Link)`
	margin-left: 10px;
`;

const RightIconBtn = styled.button`
	all: unset;

	margin-right: 10px;
	cursor: pointer;
`;

export default CoinHeaders;
