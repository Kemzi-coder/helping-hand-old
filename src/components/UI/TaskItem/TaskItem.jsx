import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {PROFILE_ROUTE, TASKS_ROUTE} from "../../../routes/routeConsts";
import styles from "./TaskItem.module.css";
import {ReactComponent as InProgressIcon} from "../../../assets/images/in-progress.svg";
import {ReactComponent as ClosedIcon} from "../../../assets/images/closed.svg";
import Button from "../Button/Button";
import UserInfo from "../UserInfo/UserInfo";

const TaskItem = ({
	number,
	title,
	description,
	id,
	className,
	isClosed,
	username,
	userId,
	avatar,
	date
}) => {
	const parsedDate = new Date(date).toLocaleString("ru", {
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric"
	});
	return (
		<div className={classNames(className, styles.item)}>
			<div className={styles.header}>
				<h3 className={styles.title}>
					{number}. {title || "Title."}
				</h3>
				<div className="row">
					<UserInfo
						className={styles.info}
						avatar={avatar}
						username={username}
						linkPath={`${PROFILE_ROUTE}/${userId}`}
					/>
					{isClosed ? <ClosedIcon /> : <InProgressIcon />}
				</div>
			</div>
			<p className={styles.description}>{description || ""}</p>
			<div className={styles.footer}>
				<NavLink to={`${TASKS_ROUTE}/${id}`}>
					<Button text="Подробнее" />
				</NavLink>

				<p className={styles.time}>{parsedDate || ""}</p>
			</div>
		</div>
	);
};

export default TaskItem;
