import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Landing from './pages/Landing.jsx';
import Challenges from './pages/Challenges.jsx';
import RandomGame from './pages/RandomGame.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>Not Found</div>,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: '/challenges',
				element: <Challenges />,
			},
			{
				path: '/randomGame',
				element: <RandomGame />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
