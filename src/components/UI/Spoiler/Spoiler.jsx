import React from "react";
import classNames from "classnames";
import styles from "./Spoiler.module.css";
import {ReactComponent as ArrowDownIcon} from "../../../assets/images/arrow-down.svg";

const noop = () => {};

const Spoiler = ({
	className,
	children,
	title,
	isOpen,
	setIsOpen = noop,
	onClick = noop
}) => {
	return (
		<div
			className={classNames(className, styles.spoiler, {
				[styles.active]: isOpen
			})}
		>
			<button
				type="button"
				className={styles.header}
				onClick={() => {
					setIsOpen(!isOpen);
					onClick();
				}}
			>
				<h3 className={styles.title}>{title}</h3>
				{isOpen ? (
					<ArrowDownIcon className={styles.up} />
				) : (
					<ArrowDownIcon />
				)}
			</button>
			{isOpen && <div>{children}</div>}
		</div>
	);
};

export default Spoiler;
