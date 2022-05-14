import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import Avatar from "../Avatar/Avatar";
import Username from "../Username/Username";
import styles from "./UserItem.module.css";
import {ReactComponent as FireIcon} from "../../../assets/images/fire.svg";
import {PROFILE_ROUTE} from "../../../routes/routeConsts";

const UserItem = ({avatar, username, isInTop, className, id}) => {
	return (
		<NavLink
			to={`${PROFILE_ROUTE}/${id}`}
			className={classNames(className, styles.item)}
		>
			<div className={styles.inner}>
				<Avatar className={styles.avatar} imagePath={avatar} />
				<Username className={styles.username} text={username} />
			</div>
			{isInTop && <FireIcon className={styles.icon} />}
		</NavLink>
	);
};

export default UserItem;
