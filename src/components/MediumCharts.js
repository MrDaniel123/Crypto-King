import { Line } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';

const MediumCharts = ({ coinData }) => {
	const sparkLine = coinData.sparkline;

	const labels = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25,
	];

	const data = {
		labels: labels,
		datasets: [
			{
				label: '',
				data: sparkLine,
				fill: true,
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgba(75,192,192,0.7)',
				tension: 0.1,
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: 'Chart Title',
			legend: {
				display: false,
			},
		},
		responsive: true,
	};

	return (
		<div>
			<Line data={data} options={options} />
		</div>
	);
};

export default MediumCharts;
