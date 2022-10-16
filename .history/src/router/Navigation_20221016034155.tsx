import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='navigation'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
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
					<Route path='/' element={<h1>Home</h1>} />
					<Route path='/about' element={<h1>About</h1>} />
					<Route path='/users' element={<h1>Users</h1>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
