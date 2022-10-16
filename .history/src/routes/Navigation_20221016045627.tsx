import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
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
						{/* name, to desestructura de routes */}
						{routes.map(({ name, to }) => (
							<li key={`route-${to}`}>
								<NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<Routes>
				{/* to, path, Component se desestructura de routes */}
				{routes.map(({ path, Component }) => (
					<Route key={`route-${path}`} path={path} element={<Component />} />
				))}

				<Route path='/*' element={<Navigate to='/lazy1' replace />} />
			</Routes>
		</BrowserRouter>
	);
};
