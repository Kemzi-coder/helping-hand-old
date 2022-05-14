import React from "react";
import classNames from "classnames";
import styles from "./Avatar.module.css";
import ImageThumbnail from "../../../assets/images/thumbnail.svg";

const Avatar = ({className, imagePath, width, height}) => {
	const path = imagePath || ImageThumbnail;

	return (
		<img
			className={classNames(className, styles.avatar)}
			width={width || "40px"}
			height={height || "40px"}
			src={path}
			alt="avatar"
		/>
	);
};

export default Avatar;
