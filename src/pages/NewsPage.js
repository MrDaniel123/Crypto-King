import { useContext } from 'react';
import styled from 'styled-components';

import { NewsContext } from '../context/NewsContext';

import LitteNews from '../components/LitteNews';

const NewsPage = () => {
	const { newsData, newsIsLoaded } = useContext(NewsContext);

	if (newsIsLoaded) {
		const newsComponents = newsData.articles.map(article => {
			return <LitteNews newsData={article} key={article._id} />;
		});

		return <NewsWrapper>{newsComponents}</NewsWrapper>;
	} else return null;
};

const NewsWrapper = styled.div`
	padding-bottom: 120px;
`;

export default NewsPage;
