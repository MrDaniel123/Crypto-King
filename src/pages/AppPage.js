import { Outlet } from 'react-router-dom';

import TopMenue from '../components/TopMenue';
import Menue from '../components/Menue';

const AppPage = () => {
	return (
		<>
			<TopMenue />
			<Outlet />
			<Menue />
		</>
	);
};

export default AppPage;
