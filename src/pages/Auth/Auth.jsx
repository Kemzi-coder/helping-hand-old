import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import Page from "../../components/UI/Page/Page";
import styles from "./Auth.module.css";
import Wave from "../../assets/images/vector.svg";
import Title from "../../components/UI/Title/Title";
import AuthService from "../../services/AuthService";

const Auth = () => {
	const dispatch = useDispatch();
	const {token} = useParams();

	useEffect(() => {
		if (token) {
			dispatch(AuthService.fastLogin(token));
		}
	}, [dispatch, token]);

	return (
		<Page pageStyle="fullscreen">
			<div className={`container ${styles.container}`}>
				<Title className={styles.title} text="Вход" titleSize="large" />
				<LoginForm />
				<h3 className={styles["list-title"]}>
					Как получить токен для входа?
				</h3>
				<ul>
					<li className={styles.item}>
						1. Нажмите на кнопку “Быстрый вход”
					</li>
					<li className={styles.item}>2. Получите токен</li>
					<li className={styles.item}>3. Войдите с помощью токена</li>
				</ul>
			</div>

			<img
				className={`${styles.wave} ${styles["wave-top"]}`}
				src={Wave}
				alt="wave"
			/>
			<img
				className={`${styles.wave} ${styles["wave-bottom"]}`}
				src={Wave}
				alt="wave"
			/>
		</Page>
	);
};

export default Auth;
