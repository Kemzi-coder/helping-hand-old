import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import classNames from "classnames";
import styles from "./Textarea.module.css";

const Textarea = ({
	className,
	value,
	name,
	placeholder,
	onChange,
	onBlur,
	maxRows,
	minRows,
	maxLength,
	isInvalid
}) => {
	return (
		<div className={styles.wrapper}>
			<TextareaAutosize
				className={classNames(className, styles.textarea, {
					[styles.invalid]: isInvalid
				})}
				value={value}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				maxRows={maxRows}
				minRows={minRows}
				maxLength={maxLength}
			/>
		</div>
	);
};

export default Textarea;
