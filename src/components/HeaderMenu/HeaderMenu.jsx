import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import AuthService from "../../services/AuthService";
import MenuItem from "../UI/MenuItem/MenuItem";
import {
	MENTORS_ROUTE,
	PROFILE_ROUTE,
	TASKS_ROUTE,
	USERS_ROUTE
} from "../../routes/routeConsts";
import useWindowSize from "../../hooks/useWindowSize";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import styles from "./HeaderMenu.module.css";

const HeaderMenu = () => {
	const [isVisible, setIsVisible] = useState(false);
	const uuid = useSelector(state => state.auth.user.uuid);
	const dispatch = useDispatch();
	const windowSize = useWindowSize();

	const handleHide = () => setIsVisible(false);
	const handleLogout = () => dispatch(AuthService.logout());

	return (
		<BurgerMenu
			className={styles.menu}
			isVisible={isVisible}
			setIsVisible={setIsVisible}
		>
			<li className={styles["list-item"]}>
				<MenuItem
					className={`${styles.item} no-flickr`}
					onClick={handleHide}
					text="Мой профиль"
					path={`${PROFILE_ROUTE}/${uuid}`}
				/>
			</li>
			<li className={styles["list-item"]}>
				<MenuItem
					className={`${styles.item} no-flickr`}
					onClick={handleHide}
					text="Мои задания"
					path={TASKS_ROUTE}
				/>
			</li>
			<li className={styles["list-item"]}>
				<MenuItem
					className={`${styles.item} no-flickr`}
					onClick={handleHide}
					text="Пользователи"
					path={USERS_ROUTE}
				/>
			</li>
			{windowSize.width <= 1024 && (
				<li className={styles["list-item"]}>
					<MenuItem
						className={`${styles.item} no-flickr`}
						onClick={handleHide}
						text="Менторы"
						path={MENTORS_ROUTE}
					/>
				</li>
			)}
			<li className={styles["list-item"]}>
				<MenuItem
					className={`${styles.item} no-flickr`}
					as="button"
					onClick={handleLogout}
					text="Выйти"
				/>
			</li>
		</BurgerMenu>
	);
};

export default HeaderMenu;
