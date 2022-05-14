import React from "react";
import classNames from "classnames";
import styles from "./Content.module.css";

const Content = ({children, className}) => {
	return (
		<div className={classNames(className, styles.content)}>{children}</div>
	);
};

export default Content;
