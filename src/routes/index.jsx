import React from "react";
import Auth from "../pages/Auth/Auth";
import {
	AUTH_ROUTE,
	PROFILE_ROUTE,
	TASKS_ROUTE,
	USERS_ROUTE
} from "./routeConsts";
import Tasks from "../pages/Tasks/Tasks";
import Task from "../pages/Task/Task";
import Profile from "../pages/Profile/Profile";
import Users from "../pages/Users/Users";

export const mentorRoutes = [
	{path: TASKS_ROUTE, element: <Tasks />},
	{path: `${PROFILE_ROUTE}/:id`, element: <Profile />},
	{path: `${TASKS_ROUTE}/:id`, element: <Task />},
	{path: USERS_ROUTE, element: <Users />}
];

export const studentRoutes = [
	{path: TASKS_ROUTE, element: <Tasks />},
	{path: `${PROFILE_ROUTE}/:id`, element: <Profile />},
	{path: `${TASKS_ROUTE}/:id`, element: <Task />},
	{path: USERS_ROUTE, element: <Users />}
];

export const publicRoutes = [
	{path: AUTH_ROUTE, element: <Auth />, isHeaderAbsolute: true},
	{path: `${AUTH_ROUTE}/:token`, element: <Auth />, isHeaderAbsolute: true}
];
