import React from "react";
import {useSelector} from "react-redux";
import {PROFILE_ROUTE} from "../../routes/routeConsts";
import styles from "./HeaderUserInfo.module.css";
import UserInfo from "../UI/UserInfo/UserInfo";

const HeaderUserInfo = () => {
	const username = useSelector(state => state.auth.user.name);
	const avatar = useSelector(state => state.auth.user.photo);
	const uuid = useSelector(state => state.auth.user.uuid);

	return (
		<UserInfo
			className={styles.info}
			linkPath={`${PROFILE_ROUTE}/${uuid}`}
			username={username}
			avatar={avatar}
		/>
	);
};

export default HeaderUserInfo;
