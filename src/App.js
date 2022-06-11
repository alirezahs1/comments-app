import './assets/styles/globals.css'
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {

	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
