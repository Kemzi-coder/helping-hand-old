import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import styles from "./MenuItem.module.css";

const MenuItem = ({className, as, path, text, onClick}) => {
	if (as) {
		const Element = as;
		return (
			<Element
				onClick={onClick}
				className={classNames(className, styles.item)}
			>
				{text}
			</Element>
		);
	}

	return (
		<NavLink
			className={({isActive}) =>
				classNames(className, styles.item, {
					[styles.active]: isActive
				})
			}
			onClick={onClick}
			end
			to={path}
		>
			{text}
		</NavLink>
	);
};

export default MenuItem;
