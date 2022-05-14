import React from "react";
import styles from "../Header/Header.module.css";
import Button from "../UI/Button/Button";

const HeaderButton = ({setIsModalVisible}) => {
	const handleClick = () => {
		document.body.classList.add("body--lock");
		setIsModalVisible(true);
	};

	return (
		<Button
			buttonStyle="accent-outline"
			className={styles.button}
			text="Попросить о помощи"
			onClick={handleClick}
		/>
	);
};

export default HeaderButton;
