import React from "react";
import {ReactComponent as VerifiedIcon} from "../../assets/images/verified.svg";
import Avatar from "../UI/Avatar/Avatar";
import styles from "./ProfileHeader.module.css";
import Title from "../UI/Title/Title";

const ProfileHeader = ({isMentor, username, avatar}) => {
	return (
		<div className={styles.header}>
			<Avatar
				imagePath={avatar}
				className={styles.avatar}
				width="180px"
				height="180px"
			/>
			{isMentor ? (
				<div className={styles.row}>
					<Title className={styles.title} text={username} />
					<VerifiedIcon />
				</div>
			) : (
				<Title className={styles.title} text={username} />
			)}
		</div>
	);
};

export default ProfileHeader;
