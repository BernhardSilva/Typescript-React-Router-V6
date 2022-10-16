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
						<li>
						{routes.map(route => (
									<li>
										<NavLink
											to={route.path}
											className={({ isActive }) => (isActive ? 'nav-active' : '')}
										>
											{route.name}
										</NavLink>
									</li>
								))}
						</li>

						{/* <li>
							<NavLink to='/lazy1' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Lazy 1
							</NavLink>
						</li>
						<li>
							<NavLink to='/lazy2' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Lazy 2
							</NavLink>
						</li>
						<li>
							<NavLink to='/lazy3' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Lazy 3
							</NavLink>
						</li> */}
					</ul>
				</nav>

				<Routes>
					<Route path='/lazy1' element={<LazyPage1 />} />
					<Route path='/lazy2' element={<LazyPage2 />} />
					<Route path='/lazy3' element={<LazyPage3 />} />

					<Route path='/*' element={<Navigate to='/lazy1' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};