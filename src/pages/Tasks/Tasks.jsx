import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TasksHeader from "../../components/TasksHeader/TasksHeader";
import Page from "../../components/UI/Page/Page";
import useWindowSize from "../../hooks/useWindowSize";
import TaskService from "../../services/TaskService";
import styles from "./Tasks.module.css";
import TaskList from "../../components/UI/TaskList/TaskList";
import MentorService from "../../services/MentorService";
import Loader from "../../components/UI/Loader/Loader";
import useIsMounting from "../../hooks/useIsMounting";
import UserList from "../../components/UI/UserList/UserList";
import Sidebar from "../../components/UI/Sidebar/Sidebar";

const Tasks = () => {
	const dispatch = useDispatch();
	const windowSize = useWindowSize();
	const isMounting = useIsMounting();
	const [isFetching, setIsFetching] = useState(false);

	const limit = useSelector(state => state.tasks.limit);

	const topMentors = useSelector(state => state.mentors.topItems);

	const mentors = useSelector(state => state.mentors.items);
	const mentorsLimit = useSelector(state => state.mentors.limit);
	const mentorsCurrentPage = useSelector(state => state.mentors.currentPage);
	const mentorsIsFetchingMore = useSelector(
		state => state.mentors.isFetchingMore
	);
	const mentorsPagesCount = useSelector(state => state.mentors.pagesCount);

	const fetchData = useCallback(async () => {
		setIsFetching(true);
		try {
			await Promise.all([
				dispatch(
					TaskService.fetchAll({
						per_page: limit,
						page: 1
					})
				),
				dispatch(
					MentorService.fetchAll({
						per_page: mentorsLimit,
						page: 1
					})
				),
				dispatch(MentorService.fetchAllTop())
			]);
		} catch (e) {
			console.log(e);
		} finally {
			setIsFetching(false);
		}
	}, [dispatch, limit, mentorsLimit]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const handleFetchMore = () => {
		dispatch(
			MentorService.fetchMore({
				per_page: mentorsLimit,
				page: mentorsCurrentPage + 1
			})
		);
	};

	if (isFetching || isMounting) {
		return <Loader className={styles.loader} />;
	}

	return (
		<Page>
			<div className="container">
				<div className={styles.inner}>
					{windowSize.width >= 1024 && (
						<Sidebar title="Менторы" className={styles.sidebar}>
							<UserList
								users={mentors}
								isFetching={mentorsIsFetchingMore}
								hasMore={mentorsCurrentPage < mentorsPagesCount}
								onFetchMore={handleFetchMore}
							/>
						</Sidebar>
					)}
					<div className={styles.main}>
						<TasksHeader />
						<TaskList />
					</div>
					{windowSize.width >= 1024 && (
						<Sidebar title="Топ менторы" className={styles.sidebar}>
							<UserList users={topMentors} isTop />
						</Sidebar>
					)}
				</div>
			</div>
		</Page>
	);
};

export default Tasks;
