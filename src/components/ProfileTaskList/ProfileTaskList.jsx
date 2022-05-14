import React from "react";
import Loader from "../UI/Loader/Loader";
import styles from "../ProfileInfo/ProfileInfo.module.css";
import TaskItem from "../UI/TaskItem/TaskItem";
import useIsMounting from "../../hooks/useIsMounting";

const ProfileTaskList = ({items, isFetching}) => {
	const isMounting = useIsMounting();

	if (isFetching || isMounting) {
		return <Loader className={styles.loader} />;
	}

	if (items.length === 0) {
		return <p>Заданий нету :(</p>;
	}

	return items.map((task, index) => (
		<TaskItem
			className={styles.task}
			key={task.id}
			id={task.uuid}
			username={task.mentor.name}
			avatar={task.mentor.photo}
			userId={task.mentor.uuid}
			number={index + 1}
			title={task.name}
			description={task.description}
			status={task.status}
			isClosed={task.closed}
			date={task.date}
		/>
	));
};

export default ProfileTaskList;
