import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./ProfileInfo.module.css";
import InfoItem from "../UI/InfoItem/InfoItem";
import ProfileDescription from "../ProfileDescription/ProfileDescription";
import Spoiler from "../UI/Spoiler/Spoiler";
import TaskService from "../../services/TaskService";
import ProfileTaskList from "../ProfileTaskList/ProfileTaskList";

const ProfileInfo = ({isMyProfile, description, id, isMentor}) => {
	const dispatch = useDispatch();
	const [sort, setSort] = useState("");
	const lastItems = useSelector(state => state.profile.lastItems);
	const isLastItemsFetching = useSelector(
		state => state.profile.isLastItemsFetching
	);

	useEffect(() => {
		if (sort) {
			dispatch(
				TaskService.fetchLast({
					sort,
					uuid: id,
					user_role: isMentor ? "mentor" : "student"
				})
			);
		}
	}, [dispatch, id, isMentor, sort]);

	return (
		<div>
			<InfoItem infoStyle="column" className={styles.item} title="Описание">
				<ProfileDescription
					isMyProfile={isMyProfile}
					description={description}
				/>
			</InfoItem>
			<Spoiler
				isOpen={sort === "open"}
				name="open"
				onClick={() => {
					setSort(sort !== "open" ? "open" : null);
				}}
				className={styles.item}
				title="Открытые задания"
			>
				<ProfileTaskList
					items={lastItems}
					isFetching={isLastItemsFetching}
				/>
			</Spoiler>
			<Spoiler
				name="closed"
				isOpen={sort === "closed"}
				onClick={() => {
					setSort(sort !== "closed" ? "closed" : null);
				}}
				className={styles.item}
				title="Закрытые задания"
			>
				<ProfileTaskList
					items={lastItems}
					isFetching={isLastItemsFetching}
				/>
			</Spoiler>
		</div>
	);
};

export default ProfileInfo;
