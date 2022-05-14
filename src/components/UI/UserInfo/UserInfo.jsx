import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import Username from "../Username/Username";
import Avatar from "../Avatar/Avatar";
import styles from "./UserInfo.module.css";

const UserInfo = ({avatar, username, align, linkPath, className}) => {
	return (
		<NavLink className={classNames(className, "row")} to={linkPath}>
			{align === "left" ? (
				<>
					<Avatar className={styles.first} imagePath={avatar} />
					<Username text={username} />
				</>
			) : (
				<>
					<Username className={styles.first} text={username} />
					<Avatar imagePath={avatar} />
				</>
			)}
		</NavLink>
	);
};

export default UserInfo;
