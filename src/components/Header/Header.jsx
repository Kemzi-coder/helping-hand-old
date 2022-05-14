import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../UI/Logo/Logo";
import {ROUTES_WITHOUT_HEADER} from "../../routes/routeConsts";
import useWindowSize from "../../hooks/useWindowSize";
import HeaderUserInfo from "../HeaderUserInfo/HeaderUserInfo";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Modal from "../UI/Modal/Modal";
import CreateForm from "../CreateForm/CreateForm";
import HeaderButton from "../HeaderButton/HeaderButton";

const Header = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const windowSize = useWindowSize();
	const location = useLocation();

	if (ROUTES_WITHOUT_HEADER.includes(location.pathname)) {
		return null;
	}

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.row}>
						<Logo className={styles.logo} />

						{windowSize.width >= 640 && (
							<HeaderButton setIsModalVisible={setIsModalVisible} />
						)}
						<Modal
							isVisible={isModalVisible}
							setIsVisible={value => setIsModalVisible(value)}
						>
							<div className="no-flickr">
								<CreateForm setIsModalVisible={setIsModalVisible} />
							</div>
						</Modal>
					</div>
					<div className={styles.row}>
						<HeaderUserInfo />
						<HeaderMenu />
					</div>
				</div>
				{windowSize.width <= 640 && (
					<HeaderButton setIsModalVisible={setIsModalVisible} />
				)}
			</div>
		</header>
	);
};

export default Header;
