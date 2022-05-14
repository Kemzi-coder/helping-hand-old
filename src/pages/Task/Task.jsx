import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import Page from "../../components/UI/Page/Page";
import TaskService from "../../services/TaskService";
import styles from "./Task.module.css";
import {PROFILE_ROUTE} from "../../routes/routeConsts";
import UserInfo from "../../components/UI/UserInfo/UserInfo";
import Title from "../../components/UI/Title/Title";
import InfoItem from "../../components/UI/InfoItem/InfoItem";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import SolutionForm from "../../components/SolutionForm/SolutionForm";
import useIsMounting from "../../hooks/useIsMounting";

const Task = () => {
	const {id} = useParams();
	const isMounting = useIsMounting();
	const dispatch = useDispatch();
	const title = useSelector(state => state.task.item.name);
	const isFetching = useSelector(state => state.task.isFetching);
	const description = useSelector(state => state.task.item.description);
	const solution = useSelector(state => state.task.item.answer);
	const studentAvatar = useSelector(state => state.task.item.student?.photo);
	const mentorAvatar = useSelector(state => state.task.item.mentor?.photo);
	const studentUsername = useSelector(state => state.task.item.student?.name);
	const mentorUsername = useSelector(state => state.task.item.mentor?.name);
	const studentId = useSelector(state => state.task.item.student?.uuid);
	const mentorId = useSelector(state => state.task.item.mentor?.uuid);
	const isClosed = useSelector(state => state.task.item.closed);

	useEffect(() => {
		dispatch(TaskService.fetchOneById(id));
	}, [dispatch, id]);

	if (isFetching || isMounting) {
		return <Loader className={styles.loader} />;
	}

	return (
		<Page>
			<div className="container container--small">
				<div className={styles.inner}>
					<div className={styles.item}>
						<Title className={styles.title} text={title} />
					</div>
					<InfoItem
						className={styles.item}
						title="Статус:"
						value={isClosed ? "закрыто" : "в прогрессе"}
					/>
					<InfoItem
						infoStyle="column"
						className={styles.item}
						title="Описание:"
					>
						<TaskDescription
							description={description}
							isClosed={isClosed}
							id={id}
						/>
					</InfoItem>
					<InfoItem className={styles.item} title="Студент:">
						<UserInfo
							linkPath={`${PROFILE_ROUTE}/${studentId}`}
							avatar={studentAvatar}
							username={studentUsername}
						/>
					</InfoItem>
					<InfoItem className={styles.item} title="Ментор:">
						<UserInfo
							linkPath={`${PROFILE_ROUTE}/${mentorId}`}
							avatar={mentorAvatar}
							username={mentorUsername}
						/>
					</InfoItem>
					<div className={styles.item}>
						{isClosed ? (
							<InfoItem
								infoStyle="column"
								className={styles.item}
								title="Решение:"
								value={solution || "Решения нету."}
							/>
						) : (
							<SolutionForm id={id} solution={solution} />
						)}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Task;
