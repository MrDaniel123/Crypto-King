import styled from 'styled-components';

import hamburgerMenue from '../assets/hamburgermenue.png';

const TopMenue = () => {
	return (
		<TopMenueWrapper>
			<button>
				<img src={hamburgerMenue} alt='Show or hide menue' />
			</button>
			<h1>Crypto King</h1>
		</TopMenueWrapper>
	);
};

const TopMenueWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
	align-items: center;
	justify-items: center;
	width: 100%;
	height: 60px;

	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0.16) 0%,
		rgba(0, 0, 0, 0.67) 100%
	);
	border-radius: 0px 0px 20px 20px;

	& > button {
		all: unset;
		background-color: rgba(0, 0, 0, 0);
	}

	& > h1 {
		grid-column: 2/5;
		color: #ffffff;
		font-size: 28px;
		font-weight: bold;
	}
`;

export default TopMenue;
