import React from "react";
import classNames from "classnames";
import styles from "./Username.module.css";

const Username = ({className, text}) => {
	return (
		<p className={classNames(className, styles.username)}>
			{text || "Username"}
		</p>
	);
};

export default Username;
