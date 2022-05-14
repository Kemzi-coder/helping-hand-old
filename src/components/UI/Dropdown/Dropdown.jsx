import React, {useRef} from "react";
import classNames from "classnames";
import styles from "./Dropdown.module.css";
import {ReactComponent as ArrowDownIcon} from "../../../assets/images/arrow-down.svg";
import useListenClickOutside from "../../../hooks/useListenClickOutside";

const noop = () => {};

const Dropdown = ({
	value,
	title,
	setIsVisible = noop,
	isVisible,
	isInvalid,
	hasPlaceholder = false,
	onClick = noop,
	children,
	className,
	buttonClassName
}) => {
	const ref = useRef();

	useListenClickOutside(ref, () => setIsVisible(false));

	return (
		<div
			ref={ref}
			className={classNames(className, styles.dropdown, {
				[styles.active]: isVisible,
				[styles.invalid]: isInvalid
			})}
		>
			<button
				type="button"
				className={classNames(buttonClassName, styles.header)}
				onClick={() => {
					setIsVisible(!isVisible);
					onClick();
				}}
			>
				<span className={styles.title}>
					{title} {hasPlaceholder && (value || "Выбрать")}
				</span>
				<ArrowDownIcon />
			</button>
			{isVisible && <div className={styles.list}>{children}</div>}
		</div>
	);
};

export default Dropdown;
