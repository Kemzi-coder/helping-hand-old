import React from "react";
import classNames from "classnames";
import styles from "./Sidebar.module.css";

const Sidebar = ({children, className, title}) => {
	return (
		<aside className={classNames(className, styles.sidebar)}>
			<h3 className={styles.title}>{title}</h3>
			<div>{children}</div>
		</aside>
	);
};

export default Sidebar;
