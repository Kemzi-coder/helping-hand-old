import React from "react";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import styles from "./LoginForm.module.css";
import {ReactComponent as TelegramIcon} from "../../assets/images/telegram.svg";
import Button from "../UI/Button/Button";
import AuthService from "../../services/AuthService";
import Input from "../UI/Input/Input";
import FormElement from "../UI/FormElement/FormElement";

const LoginForm = () => {
	const dispatch = useDispatch();
	const validationSchema = yup.object().shape({
		token: yup
			.string()
			.required("Это поле обязательно.")
			.max(50, "Слишком много символов.")
	});

	const handleSubmit = (values, helpers) => {
		dispatch(
			AuthService.login(
				values.token,
				helpers.setFieldError,
				helpers.setSubmitting
			)
		);
	};

	return (
		<Formik
			initialValues={{token: ""}}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
			validateOnBlur
		>
			{({isSubmitting}) => (
				<Form>
					<Field
						name="token"
						placeholder="Токен"
						component={FormElement}
						fieldType={Input}
						className={styles.input}
					/>
					<Button
						isSubmit
						isDisabled={isSubmitting}
						className={styles["login-btn"]}
						text="Войти"
						isFetching={isSubmitting}
					/>
					<a
						href="https://t.me/HH_HELPINGHAND_BOT"
						target="_blank"
						rel="noreferrer noopener"
					>
						<Button
							buttonStyle="accent-outline"
							className={styles["quick-btn"]}
							text="Быстрый вход"
							icon={TelegramIcon}
						/>
					</a>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
