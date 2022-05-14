import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../Loader/Loader";
import styles from "./TaskList.module.css";
import TaskItem from "../TaskItem/TaskItem";
import TaskService from "../../../services/TaskService";
import useUpdateEffect from "../../../hooks/useUpdateEffect";

const TaskList = () => {
	const dispatch = useDispatch();
	const isFetching = useSelector(state => state.tasks.isFetching);
	const tasks = useSelector(state => state.tasks.items);
	const limit = useSelector(state => state.tasks.limit);
	const searchQuery = useSelector(state => state.tasks.searchQuery);
	const sortValue = useSelector(state => state.tasks.sortBy.value);
	const isFetchingMore = useSelector(state => state.tasks.isFetchingMore);
	const currentPage = useSelector(state => state.tasks.currentPage);
	const pagesCount = useSelector(state => state.tasks.pagesCount);
	const hasMore = currentPage < pagesCount;

	useUpdateEffect(() => {
		dispatch(
			TaskService.fetchAll({
				per_page: limit,
				page: 1,
				query: searchQuery,
				sort: sortValue
			})
		);
	}, [dispatch, limit, searchQuery, sortValue]);

	const handleLoadMore = () => {
		if (!isFetchingMore && hasMore) {
			dispatch(
				TaskService.fetchMore({
					per_page: limit,
					page: currentPage + 1,
					query: searchQuery,
					sort: sortValue
				})
			);
		}
	};

	if (isFetching) {
		return <Loader className={styles.loader} />;
	}

	return (
		<InfiniteScroll
			pageStart={0}
			loadMore={handleLoadMore}
			hasMore={hasMore}
			loader={<Loader key={0} className={styles.loader} />}
		>
			{tasks.length !== 0
				? tasks.map((task, index) => (
						<TaskItem
							key={task.id}
							id={task.uuid}
							username={task.student.name}
							avatar={task.student.photo}
							userId={task.student.uuid}
							number={index + 1}
							title={task.name}
							description={task.description}
							status={task.status}
							isClosed={task.closed}
							date={task.date}
						/>
				  ))
				: "Заданий нету :("}
		</InfiniteScroll>
	);
};

export default TaskList;
