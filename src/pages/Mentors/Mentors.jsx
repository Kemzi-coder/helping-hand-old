import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Page from "../../components/UI/Page/Page";
import UserItem from "../../components/UI/UserItem/UserItem";
import styles from "./Mentors.module.css";
import MentorService from "../../services/MentorService";
import Loader from "../../components/UI/Loader/Loader";
import useIsMounting from "../../hooks/useIsMounting";
import Button from "../../components/UI/Button/Button";

const Mentors = () => {
	const dispatch = useDispatch();
	const isMounting = useIsMounting();
	const mentors = useSelector(state => state.mentors.items);
	const isFetching = useSelector(state => state.mentors.isFetching);
	const isFetchingMore = useSelector(state => state.mentors.isFetchingMore);
	const limit = useSelector(state => state.mentors.limit);
	const currentPage = useSelector(state => state.mentors.currentPage);
	const pagesCount = useSelector(state => state.mentors.pagesCount);
	const hasMore = currentPage < pagesCount;

	useEffect(() => {
		dispatch(
			MentorService.fetchAll({
				per_page: limit,
				page: 1
			})
		);
	}, [dispatch, limit]);

	const handleFetchMore = () => {
		dispatch(
			MentorService.fetchMore({
				per_page: limit,
				page: currentPage + 1
			})
		);
	};

	if (isFetching || isMounting) {
		return <Loader className={styles.loader} />;
	}

	return (
		<Page>
			<div className={`container ${styles.container}`}>
				<div className={styles.wrapper}>
					<div>
						{mentors.map(user => (
							<UserItem
								className={styles.user}
								key={user.id}
								avatar={user.photo}
								username={user.name}
								rating={user.rating}
								id={user.uuid}
							/>
						))}
					</div>
					{hasMore && (
						<Button
							onClick={handleFetchMore}
							className={styles.button}
							text="Больше"
							isFetching={isFetchingMore}
						/>
					)}
				</div>
			</div>
		</Page>
	);
};

export default Mentors;
