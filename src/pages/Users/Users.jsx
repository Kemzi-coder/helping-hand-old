import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Page from "../../components/UI/Page/Page";
import styles from "./Users.module.css";
import Loader from "../../components/UI/Loader/Loader";
import UserItem from "../../components/UI/UserItem/UserItem";
import UserService from "../../services/UserService";
import useIsMounting from "../../hooks/useIsMounting";
import Button from "../../components/UI/Button/Button";

const Users = () => {
	const dispatch = useDispatch();
	const isMounting = useIsMounting();
	const users = useSelector(state => state.users.items);
	const isFetching = useSelector(state => state.users.isFetching);
	const limit = useSelector(state => state.users.limit);
	const currentPage = useSelector(state => state.users.currentPage);
	const pagesCount = useSelector(state => state.users.pagesCount);
	const hasMore = currentPage < pagesCount;
	const isFetchingMore = useSelector(state => state.users.isFetchingMore);

	useEffect(() => {
		dispatch(
			UserService.fetchAll({
				per_page: limit,
				page: 1
			})
		);
	}, [dispatch, limit]);

	const handleFetchMore = () => {
		dispatch(
			UserService.fetchMore({
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
						{users.map(user => (
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

export default Users;
