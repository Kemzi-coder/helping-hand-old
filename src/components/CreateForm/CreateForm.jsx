import React, {useState} from "react";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import DropdownOption from "../UI/DropdownOption/DropdownOption";
import Loader from "../UI/Loader/Loader";
import MentorAPI from "../../api/MentorAPI";
import TaskService from "../../services/TaskService";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import FormElement from "../UI/FormElement/FormElement";
import styles from "./CreateForm.module.css";

const CreateForm = ({setIsModalVisible}) => {
	const dispatch = useDispatch();
	const limit = useSelector(state => state.tasks.limit);
	const searchQuery = useSelector(state => state.tasks.searchQuery);
	const sortValue = useSelector(state => state.tasks.sortBy.value);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const [dropdownOptions, setDropdownOptions] = useState([]);
	const [isOptionsFetching, setIsOptionsFetching] = useState(false);
	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.required("Это поле обязательно.")
			.max(24, "Слишком много символов."),
		description: yup
			.string()
			.required("Это поле обязательно.")
			.max(800, "Слишком много символов."),
		mentorName: yup.string().required("Это поле обязательно.")
	});

	const fetchOptions = async () => {
		setIsOptionsFetching(true);
		try {
			const response = await MentorAPI.fetchAll();
			setDropdownOptions(response.data.users);
		} catch (e) {
			console.log(e);
		} finally {
			setIsOptionsFetching(false);
		}
	};

	const handleSubmit = (values, helpers) => {
		dispatch(
			TaskService.create(
				{
					name: values.name,
					description: values.description,
					mentor: values.mentorId
				},
				helpers.setSubmitting,
				{
					per_page: limit,
					page: 1,
					query: searchQuery,
					sort: sortValue
				}
			)
		);
		document.body.classList.remove("body--lock");
		setIsModalVisible(false);
	};

	const handleDropdownClick = () => {
		if (dropdownOptions.length === 0) {
			fetchOptions();
		}
	};

	return (
		<Formik
			initialValues={{
				name: "",
				mentorName: "",
				mentorId: "",
				description: ""
			}}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
			validateOnBlur
		>
			{({setFieldValue, values, isSubmitting}) => (
				<Form className={styles.form}>
					<div className={styles.fields}>
						<Field
							name="mentorName"
							title="Ментор:"
							hasPlaceholder
							component={FormElement}
							fieldType={Dropdown}
							className={styles.field}
							buttonClassName={styles.dropdown}
							isVisible={isDropdownVisible}
							setIsVisible={setIsDropdownVisible}
							onClick={handleDropdownClick}
							value={values.mentorName}
						>
							{isOptionsFetching ? (
								<div className={styles["loader-wrapper"]}>
									<Loader className={styles.loader} />
								</div>
							) : (
								dropdownOptions.map(option => (
									<DropdownOption
										key={option.id}
										isActive={values.mentorName === option.name}
										onClick={value => {
											setFieldValue("mentorName", value);
											setFieldValue("mentorId", option.uuid, false);
											setIsDropdownVisible(false);
										}}
										value={option.name}
									/>
								))
							)}
						</Field>
						<Field
							name="name"
							placeholder="Заглавье"
							component={FormElement}
							fieldType={Input}
							className={styles.field}
						/>
						<Field
							name="description"
							placeholder="Описание"
							component={FormElement}
							fieldType={Textarea}
							className={styles.field}
							maxRows="3"
							minRows="3"
						/>
					</div>
					<Button
						isSubmit
						isFetching={isSubmitting}
						isDisabled={isSubmitting}
						className={styles.button}
						text="Создать"
					/>
				</Form>
			)}
		</Formik>
	);
};

export default CreateForm;
