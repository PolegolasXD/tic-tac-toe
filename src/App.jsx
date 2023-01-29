import React from 'react';
import { useAuth } from './context/AuthContext';
import { useUser } from './context/UserContext';
import { openAuthPopUp } from './firebase/utils';
import Game from './pages/Game';

const Home = ({ setPage }) => {
	const { isAuth } = useUser();
	const { setAuth } = useAuth();

	console.log(isAuth);

	return (
		<div>
			<h1>Home</h1>
			<button
				onClick={() =>
					openAuthPopUp((data) => {
						setAuth(data);
					})
				}>
				fazer login com google
			</button>
			<button onClick={() => setPage('game')}>Start Game</button>
		</div>
	);
};

const App = () => {
	const [page, setPage] = React.useState('HOME');

	switch (page) {
		case 'home':
			return <Home setPage={setPage} />;
		case 'game':
			return <Game />;
		default:
			return <Home setPage={setPage} />;
	}
};

export default App;
