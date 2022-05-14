import React from "react";
import classNames from "classnames";
import styles from "./Page.module.css";

const STYLES = ["default", "fullscreen"];

const Page = ({className, pageStyle, children}) => {
	const checkPageStyle = STYLES.includes(pageStyle) ? pageStyle : STYLES[0];

	return (
		<div className={classNames(className, styles[checkPageStyle])}>
			{children}
		</div>
	);
};

export default Page;
