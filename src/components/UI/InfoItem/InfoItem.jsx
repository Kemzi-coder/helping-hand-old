import React from "react";
import classNames from "classnames";
import styles from "./InfoItem.module.css";

const STYLES = ["row", "column"];

const InfoItem = ({title, value, className, children, infoStyle}) => {
	const checkInfoStyle = STYLES.includes(infoStyle) ? infoStyle : STYLES[0];

	return (
		<div
			className={classNames(className, styles.item, styles[checkInfoStyle])}
		>
			<h3 className={styles.title}>{title}</h3>
			{children || <p className={styles.value}>{value}</p>}
		</div>
	);
};

export default InfoItem;
