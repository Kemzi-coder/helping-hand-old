import React from "react";
import classNames from "classnames";
import styles from "./Link.module.css";

const Link = ({className, href, rel, target, text}) => {
	return (
		<a
			className={classNames(className, styles.link)}
			href={href}
			rel={rel}
			target={target}
		>
			{text}
		</a>
	);
};

export default Link;
