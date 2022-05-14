import React, {useState} from "react";
import {useDispatch} from "react-redux";
import styles from "../../pages/Task/Task.module.css";
import {taskActs} from "../../store/slices/task";
import TaskService from "../../services/TaskService";
import Editable from "../UI/Editable/Editable";

const TaskDescription = ({description, isClosed, id}) => {
	const dispatch = useDispatch();
	const [isEditable, setIsEditable] = useState(false);

	const handleEdit = value => {
		dispatch(taskActs.setDescription(value));
		TaskService.updateOne(id, {description: value});
	};

	if (isClosed) {
		return (
			<p className={styles.description}>{description || "Описания нету."}</p>
		);
	}

	return (
		<Editable
			isEditable={isEditable}
			setIsEditable={setIsEditable}
			onEdit={handleEdit}
			value={description}
			editOnBlur
		>
			<p className={styles.description}>{description || "Описания нету."}</p>
		</Editable>
	);
};

export default TaskDescription;
