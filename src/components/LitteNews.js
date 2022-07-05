import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LitteNews = ({ newsData }) => {
	const title = newsData.title.slice(0, 80);
	const description = newsData.summary.slice(0, 200);

	return (
		<LitteCoinWrapper href={newsData.link} target='_blank'>
			<Img src={newsData.media}></Img>
			<Title>{title}</Title>

			<Description>{description}...</Description>
			<Time>2{newsData.published_date}</Time>
			<Author>{newsData.author}</Author>
		</LitteCoinWrapper>
	);
};

const LitteCoinWrapper = styled.a`
	display: grid;
	grid-template-columns: repeat(3, 1fr) 100px;
	grid-template-rows: 100px repeat(5, 1fr);
	align-items: center;
	justify-items: center;

	height: 200px;
	width: 320px;
	margin-top: 20px;
	text-decoration: none;
	color: #fff;
	font-size: 12px;
	cursor: pointer;

	background: linear-gradient(90deg, #1d071e 0%, #500852 47.92%, #000000 100%);
	box-shadow: -4px 4px 10px rgba(64, 64, 64, 0.4),
		inset 0px 0px 7px rgba(77, 77, 77, 0.6);
	border-radius: 10px;
`;

const Img = styled.img`
	grid-column: 4/5;
	grid-row: 1/2;
	height: 90px;
	width: 90px;
	margin: 10px;
	border-radius: 5px;
`;

const Title = styled.p`
	grid-column: 1/4;
	grid-row: 1/2;

	padding: 0 15px;
	text-align: center;
	font-size: 14px;
	font-weight: bold;
`;
const Description = styled.p`
	grid-column: 1/5;
	grid-row: 2/6;

	overflow: hidden;
	padding: 0 15px;
	font-size: 12px;
	color: #c1c1c1;
`;
const Time = styled.p`
	grid-column: 1/3;
	grid-row: 6/7;

	padding: 0 15px;
	font-size: 8px;
	color: #7e7e7e;
`;
const Author = styled.p`
	grid-column: 3/5;
	grid-row: 6/7;

	padding: 0 15px;
	font-size: 8px;
	color: #7e7e7e;
`;

export default LitteNews;
