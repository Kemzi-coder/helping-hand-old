import React from "react";
import {NavLink} from "react-router-dom";
import {ReactComponent as LogoIcon} from "../../../assets/images/logo.svg";
import {TASKS_ROUTE} from "../../../routes/routeConsts";

const Logo = ({className}) => {
	return (
		<NavLink className={className} to={TASKS_ROUTE} aria-label="logo link">
			<LogoIcon />
		</NavLink>
	);
};

export default Logo;
