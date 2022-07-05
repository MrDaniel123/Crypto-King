import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import AppPage from './pages/AppPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import WalletPage from './pages/WalletPage';
import CoinPage from './pages/CoinPage';

import CryptoDataPrivider from './context/CryptoDataContext';
import ExchangeWalletProvider from './context/ExchangeWalletContext';
import NewsPrivider from './context/NewsContext';

import './styles/global.css';

function App() {
	return (
		<CryptoDataPrivider>
			<NewsPrivider>
				<ExchangeWalletProvider>
					<React.StrictMode>
						<AppWrapper>
							{/* <TopMenue /> */}
							<Routes>
								<Route path='/' element={<AppPage />}>
									<Route path='/' element={<HomePage />} />
									<Route path='/:coinId' element={<CoinPage />} />
									<Route path='news' element={<NewsPage />} />
									<Route path='wallet' element={<WalletPage />} />
								</Route>
							</Routes>
							{/* <Menue /> */}
						</AppWrapper>
					</React.StrictMode>
				</ExchangeWalletProvider>
			</NewsPrivider>
		</CryptoDataPrivider>
	);
}
const AppWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	justify-content: center;

	width: 100%;
	min-height: 100vh;
`;

export default App;
