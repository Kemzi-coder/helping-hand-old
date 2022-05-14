import React from "react";
import UserItem from "../UserItem/UserItem";
import Button from "../Button/Button";
import styles from "./UserList.module.css";

const UserList = ({users, isTop, isFetching, hasMore, onFetchMore}) => {
	return (
		<>
			<div>
				{users.map(user => (
					<UserItem
						key={user.id}
						avatar={user.photo}
						username={user.name}
						id={user.uuid}
						isInTop={isTop}
					/>
				))}
			</div>
			{!isTop && hasMore && (
				<Button
					onClick={onFetchMore}
					className={styles.button}
					text="Больше"
					isFetching={isFetching}
				/>
			)}
		</>
	);
};

export default UserList;
