import React from "react";
import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {mentorRoutes, publicRoutes, studentRoutes} from "../../routes";
import {AUTH_ROUTE, MENTORS_ROUTE, TASKS_ROUTE} from "../../routes/routeConsts";
import useWindowSize from "../../hooks/useWindowSize";
import Mentors from "../../pages/Mentors/Mentors";

const AppRouter = () => {
	const windowSize = useWindowSize();
	const isAuth = useSelector(state => state.auth.isAuth);
	const isMentor = useSelector(state => state.auth.user.role) === "mentor";

	const MentorsRoute = <Route path={MENTORS_ROUTE} element={<Mentors />} />;

	if (isMentor && isAuth) {
		return (
			<Routes>
				{mentorRoutes.map(({path, element}) => (
					<Route key={path} path={path} element={element} />
				))}
				{windowSize.width <= 1024 && MentorsRoute}
				<Route path="*" element={<Navigate to={TASKS_ROUTE} />} />
			</Routes>
		);
	}

	if (isAuth) {
		return (
			<Routes>
				{studentRoutes.map(({path, element}) => (
					<Route key={path} path={path} element={element} />
				))}
				{windowSize.width <= 1024 && MentorsRoute}
				<Route path="*" element={<Navigate to={TASKS_ROUTE} />} />
			</Routes>
		);
	}

	return (
		<Routes>
			{publicRoutes.map(({path, element}) => (
				<Route key={path} path={path} element={element} />
			))}
			<Route path="*" element={<Navigate to={AUTH_ROUTE} />} />
		</Routes>
	);
};

export default AppRouter;
