import React from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

const Input = ({
	className,
	type = "text",
	value,
	name,
	placeholder,
	onChange,
	onBlur,
	onKeyDown,
	isInvalid
}) => {
	return (
		<input
			onKeyDown={onKeyDown}
			onChange={onChange}
			onBlur={onBlur}
			className={classNames(className, styles.input, {
				[styles.invalid]: isInvalid
			})}
			value={value}
			name={name}
			placeholder={placeholder}
			type={type}
		/>
	);
};

export default Input;
