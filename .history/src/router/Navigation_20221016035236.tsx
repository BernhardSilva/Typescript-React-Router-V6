import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LazyPages1 } from '../01-lazyload/pages/LazyPages1';
import logo from '../logo.svg';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='navigation'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						<li>
							<NavLink to='/lazy1' className={({ isActive }) => (isActive ? 'nav-active' : '')}>Lazy1</NavLink>
						</li>
						<li>
							<NavLink to='/lazy2' className={({ isActive }) => (isActive ? 'nav-active' : '')}>Lazy2</NavLink>
						</li>
						<li>
							<NavLink to='/lazy3' className={({ isActive }) => (isActive ? 'nav-active' : '')}>Lazy3</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='/lazy1' element={<LazyPages1/>} />
					<Route path='/lazy2' element={<h1>About</h1>} />
					<Route path='/lazy3' element={<h1>Users</h1>} />
					<Route path='/*' element={<Navigate to='/lazy1' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
