import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
	return (
		//TODO crear nav dinámicos
		<BrowserRouter>
			<div className='navigation'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						{routes.map(({ name, to }) => (
							<li key={`route-${to}`}>
								<NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<Routes>
					{/* {routes.map(route => (
					// <Route path={route.path} element={route.} />
					))} */}

					<Route path='/lazy1' element={<LazyPage1 />} />
					<Route path='/lazy2' element={<LazyPage2 />} />
					<Route path='/lazy3' element={<LazyPage3 />} />

					<Route path='/*' element={<Navigate to='/lazy1' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
