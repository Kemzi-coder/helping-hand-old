import React from "react";
import classNames from "classnames";
import styles from "./Loader.module.css";

const Loader = ({className}) => {
	return (
		<div className={classNames(className, styles.loader)}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};

export default Loader;
