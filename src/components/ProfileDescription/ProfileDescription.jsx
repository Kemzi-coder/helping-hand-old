import React, {useState} from "react";
import {useDispatch} from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import {profileActs} from "../../store/slices/profile";
import styles from "./ProfileDescription.module.css";
import UserService from "../../services/UserService";
import Link from "../UI/Link/Link";
import Editable from "../UI/Editable/Editable";

const ProfileDescription = ({description, isMyProfile}) => {
	const dispatch = useDispatch();
	const [isEditable, setIsEditable] = useState(false);

	const handleEdit = value => {
		dispatch(profileActs.setDescription(value));
		dispatch(UserService.updateOne({description: value}));
	};

	const markdownPlugins = [remarkBreaks, remarkGfm];
	const markdownComponents = {
		a: ({href, children}) => (
			<Link
				href={href}
				text={children}
				target="_blank"
				rel="noreferrer noopener"
			/>
		)
	};

	if (isMyProfile) {
		return (
			<Editable
				isEditable={isEditable}
				setIsEditable={setIsEditable}
				onEdit={handleEdit}
				value={description}
				editOnBlur
			>
				<ReactMarkdown
					className={styles.description}
					components={markdownComponents}
					remarkPlugins={markdownPlugins}
				>
					{description || "Здесь пока ничего нету :("}
				</ReactMarkdown>
			</Editable>
		);
	}

	return (
		<ReactMarkdown
			className={styles.description}
			components={markdownComponents}
			remarkPlugins={markdownPlugins}
		>
			{description || "Здесь пока ничего нету :("}
		</ReactMarkdown>
	);
};

export default ProfileDescription;
