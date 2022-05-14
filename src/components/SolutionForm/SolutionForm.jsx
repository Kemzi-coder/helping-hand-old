import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import classNames from "classnames";
import FormElement from "../UI/FormElement/FormElement";
import Textarea from "../UI/Textarea/Textarea";
import styles from "./SolutionForm.module.css";
import TaskService from "../../services/TaskService";
import {TASKS_ROUTE} from "../../routes/routeConsts";
import Button from "../UI/Button/Button";
import Editable from "../UI/Editable/Editable";

const SolutionForm = ({id, solution}) => {
	const [isClosing, setIsClosing] = useState(false);
	const [isEditable, setIsEditable] = useState(false);
	const navigate = useNavigate();
	const validationSchema = yup.object().shape({
		solution: yup
			.string()
			.required("Это поле обязательно.")
			.notOneOf([solution], "Поле никак не изменилось.")
			.max(800, "Максмальное количество символов - 800.")
	});

	const handleSubmit = async (values, helpers) => {
		helpers.setSubmitting(true);
		await TaskService.updateOne(id, {answer: values.solution});
		helpers.setSubmitting(false);

		setIsEditable(false);
	};

	const handleClose = async () => {
		setIsClosing(true);
		await TaskService.close(id);
		setIsClosing(false);
		navigate(TASKS_ROUTE);
	};

	return (
		<Formik
			initialValues={{solution}}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
			validateOnBlur
		>
			{({isSubmitting, values}) => (
				<Form>
					<Editable
						isEditable={isEditable}
						setIsEditable={setIsEditable}
						className={styles.solution}
						textareaComponent={
							<Field
								name="solution"
								placeholder="Решение"
								component={FormElement}
								fieldType={Textarea}
								className={styles.textarea}
								minRows="3"
								maxRows="3"
								maxLength="800"
							/>
						}
					>
						<p>{values.solution || "Решения нету."}</p>
					</Editable>

					<div className={styles.buttons}>
						{isEditable && (
							<Button
								isSubmit
								isFetching={isSubmitting}
								isDisabled={isSubmitting}
								className={classNames(
									styles.button,
									styles["save-button"]
								)}
								text="Сохранить"
							/>
						)}
						<Button
							onClick={handleClose}
							isFetching={isClosing}
							isDisabled={isClosing}
							className={classNames(
								styles.button,
								styles["close-button"]
							)}
							text="Закрыть"
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default SolutionForm;
