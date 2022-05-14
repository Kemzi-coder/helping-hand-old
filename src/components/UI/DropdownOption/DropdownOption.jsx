import React from "react";
import classNames from "classnames";
import styles from "./DropdownOption.module.css";
import {ReactComponent as Mark} from "../../../assets/images/mark.svg";

const noop = () => {};

const DropdownOption = ({className, onClick = noop, value, isActive}) => {
	return (
		<button
			type="button"
			className={classNames(className, styles.option)}
			onClick={() => onClick(value)}
			disabled={isActive}
		>
			{isActive && <Mark className={styles.icon} />}
			<span>{value}</span>
		</button>
	);
};

export default DropdownOption;
