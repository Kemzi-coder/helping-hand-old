import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

const STYLES = ["primary", "accent", "accent-outline"];

const Button = ({
	text,
	isSubmit,
	isDisabled,
	buttonStyle,
	onClick,
	className,
	isFetching,
	icon: Icon
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	return (
		<button
			disabled={isDisabled}
			className={classNames(
				className,
				styles.button,
				styles[checkButtonStyle]
			)}
			type={isSubmit ? "submit" : "button"}
			onClick={onClick}
		>
			{Icon && <Icon className={styles.icon} />}
			{isFetching ? "Загрузка..." : text}
		</button>
	);
};

export default Button;
