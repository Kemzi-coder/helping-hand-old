import React from "react";
import classNames from "classnames";
import styles from "./Modal.module.css";

const Modal = ({isVisible, setIsVisible, children, className}) => {
	return (
		<div
			role="presentation"
			className={classNames(className, styles.modal, {
				[styles.active]: isVisible
			})}
			onClick={() => {
				setIsVisible(false);
				document.body.classList.remove("body--lock");
			}}
		>
			<div
				role="presentation"
				onClick={e => e.stopPropagation()}
				className={styles.content}
			>
				{children}
			</div>
		</div>
	);
};
export default Modal;
