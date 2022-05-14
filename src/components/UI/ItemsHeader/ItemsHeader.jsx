import React from "react";
import classNames from "classnames";
import styles from "./ItemsHeader.module.css";

const ItemsHeader = ({className, children}) => {
	return (
		<div className={classNames(className, styles.header)}>{children}</div>
	);
};

export default ItemsHeader;
