import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='navigation'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						<li>
							<NavLink to='/home'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/about'>About</NavLink>
						</li>
						<li>
							<NavLink to='/users'>Users</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route
						className={({ isActive }) => (isActive ? 'nav-active' : '')}
						path='/home'
						element={<h1>Home</h1>}
					/>
					<Route path='/about' element={<h1>About</h1>} />
					<Route path='/users' element={<h1>Users</h1>} />
					<Route path='/*' element={<Navigate to='/home' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
