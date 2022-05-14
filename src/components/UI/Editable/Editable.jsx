import React, {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import classNames from "classnames";
import {ReactComponent as EditIcon} from "../../../assets/images/edit.svg";
import styles from "./Editable.module.css";

const Editable = ({
	className,
	onEdit,
	value = "",
	children,
	editOnBlur,
	isEditable,
	setIsEditable,
	textareaComponent
}) => {
	const [editedValue, setEditedValue] = useState(value);

	const handleChange = e => setEditedValue(e.target.value);

	const handleBlur = () => {
		if (editOnBlur) {
			onEdit(editedValue);
			setIsEditable(false);
		}
	};

	const handleFocus = e => {
		e.target.setSelectionRange(editedValue.length, editedValue.length);
	};

	const handleKeyDown = e => {
		if (e.key === "Enter" && !e.shiftKey) {
			onEdit(editedValue);
			setIsEditable(false);
		}
	};

	const textarea = textareaComponent || (
		<TextareaAutosize
			maxRows="6"
			maxLength="400"
			className={styles.textarea}
			value={editedValue}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			onBlur={handleBlur}
			autoFocus
			onFocus={handleFocus}
		/>
	);

	return (
		<div className={classNames(className, styles.wrapper)}>
			{isEditable ? (
				textarea
			) : (
				<>
					{children}

					<button
						className={styles.button}
						onClick={() => setIsEditable(true)}
						type="button"
					>
						<EditIcon />
					</button>
				</>
			)}
		</div>
	);
};

export default Editable;
