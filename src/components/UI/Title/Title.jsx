import React from "react";
import classNames from "classnames";
import styles from "./Title.module.css";

const SIZES = ["medium", "large", "small"];

const Title = ({text, titleSize, className}) => {
	const checkTitleSize = SIZES.includes(titleSize) ? titleSize : SIZES[0];
	let Tag;

	switch (titleSize) {
		case "large":
			Tag = "h1";
			break;
		case "medium":
			Tag = "h2";
			break;
		case "small":
			Tag = "h3";
			break;
		default:
			Tag = "h2";
	}

	return (
		<Tag className={classNames(className, styles[checkTitleSize])}>
			{text}
		</Tag>
	);
};

export default Title;
