import React, {useRef} from "react";
import classNames from "classnames";
import useListenClickOutside from "../../../hooks/useListenClickOutside";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({children, className, setIsVisible, isVisible}) => {
	const ref = useRef();

	useListenClickOutside(ref, () => setIsVisible(false));

	return (
		<div className={classNames(className, styles.wrapper)} ref={ref}>
			<button
				onClick={() => setIsVisible(!isVisible)}
				className={styles.button}
				type="button"
				aria-label="burger menu button"
			>
				<span />
			</button>
			<ul className={classNames(styles.menu, {[styles.active]: isVisible})}>
				{children}
			</ul>
		</div>
	);
};

export default BurgerMenu;
