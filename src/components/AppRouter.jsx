import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { Context } from '..';

const AppRouter = () => {
	const {auth} = useContext(Context)
	const user = false
	return (
		<>
			<Routes>
				{user ? (
					privateRoutes.map(({ path, element }) => (
						<Route path={path} element={element} key={path} />
					))
				) : (
					publicRoutes.map(({ path, element }) => (
						<Route path={path} element={element} key={path} />
					))
				)}

			</Routes>
			<Navigate to={user ? CHAT_ROUTE : LOGIN_ROUTE} />
		</>
	)
};

export default AppRouter;