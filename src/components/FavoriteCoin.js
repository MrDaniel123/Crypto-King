import styled from 'styled-components';

import heart from '../assets/Heart.png';

const FavoriteCoin = ({ icon, name, deleteElementFromFavorite }) => {
	return (
		<Wrapper>
			<Icon src={icon} />
			<Name>{name}</Name>
			<HeartBtn onClick={() => deleteElementFromFavorite(name)}>
				<img src={heart} alt='A heart' />
			</HeartBtn>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	margin-bottom: 10px;
`;
const Icon = styled.img`
	height: 35px;
	width: 35px;

	margin-left: 10px;
`;
const Name = styled.p`
	font-size: 24px;
	color: #fff;
`;
const HeartBtn = styled.button`
	all: unset;
	width: 30px;

	margin-right: 10px;
`;

export default FavoriteCoin;
