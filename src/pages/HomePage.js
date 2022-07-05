import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MarketsInfo from '../components/MarketsInfo';
import LitteCoin from '../components/LitteCoin';

import { CryptoDataContext } from '../context/CryptoDataContext';

const HomePage = () => {
	const { coinsData, isLoaded } = useContext(CryptoDataContext);

	if (!isLoaded) {
		return console.log('L0ading');
	} else {
		const litteCoinComponents = coinsData.data.coins.map(coin => {
			return (
				<Link
					key={coin.uuid}
					to={coin.uuid}
					style={{
						textDecoration: 'none',
					}}>
					<LitteCoin key={coin.uuid} coinData={coin} />
				</Link>
			);
		});

		return (
			<LinkWrapper>
				<MarketsInfo marketsData={coinsData.data.stats} />
				{litteCoinComponents}
			</LinkWrapper>
		);
	}
};

const LinkWrapper = styled.div`
	padding-bottom: 120px;
`;

export default HomePage;
