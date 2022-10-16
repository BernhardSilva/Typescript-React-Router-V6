import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

export const routes = [
	{
		to: '/lazy-1',
		path: '/lazy1',
		Component: LazyPage1,
		name: 'Lazy-1'
	},
	{
		to: '/lazy-2',
		path: '/lazy2',
		Component: LazyPage2,
		name: 'Lazy-2'
	},
	{
		to: '/lazy-3',
		path: '/lazy3',
		Component: LazyPage3,
		name: 'Lazy-3'
	}
];
