import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import homeIcon from '../assets/HomeBTN.png';
import homeIconColor from '../assets/HomeBTNColor.png';
import newsIcon from '../assets/NewsBTN.png';
import newsIconColor from '../assets/NewsBTNColor.png';
import walletIcon from '../assets/ValletBTN.png';
import wallletIconColor from '../assets/ValletBTNColor.png';

const Menue = () => {
	return (
		<MenueWrapper>
			<LinkElem to='/' className='home-btn'></LinkElem>
			<LinkElem to='/news' className='news-btn'></LinkElem>
			<LinkElem to='wallet' className='wallet-btn'></LinkElem>
		</MenueWrapper>
	);
};

const MenueWrapper = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	left: 50%;
	bottom: 0px;
	transform: translateX(-50%);
	width: 360px;
	height: 55px;

	background: linear-gradient(180deg, #be53ff -47.27%, #290042 93.64%);
	box-shadow: 0px 4px 4px #000000, inset 0px 4px 10px #000000;
	border-radius: 20px 20px 0px 0px;
`;

const LinkElem = styled(NavLink)`
	position: relative;
	height: 40px;
	width: 40px;
	border-radius: 11px;
	cursor: pointer;

	background-color: #000;

	&.home-btn {
		background-image: url(${homeIcon});
	}

	&.home-btn.active {
		background-image: url(${homeIconColor});
	}

	&.news-btn {
		background-image: url(${newsIcon});
	}
	&.news-btn.active {
		background-image: url(${newsIconColor});
	}

	&.wallet-btn {
		background-image: url(${walletIcon});
	}
	&.wallet-btn.active {
		background-image: url(${wallletIconColor});
	}
`;

export default Menue;
