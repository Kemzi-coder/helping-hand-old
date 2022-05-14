import React from "react";
import styles from "./FormElement.module.css";

const FormElement = ({
	field,
	form: {touched, errors},
	fieldType,
	className,
	children,
	...props
}) => {
	const Element = fieldType;
	const hasError = touched[field.name] && errors[field.name];

	return (
		<div className={className}>
			{hasError && <div className={styles.error}>{errors[field.name]}</div>}
			{children ? (
				<Element isInvalid={hasError} {...field} {...props}>
					{children}
				</Element>
			) : (
				<Element isInvalid={hasError} {...field} {...props} />
			)}
		</div>
	);
};

export default FormElement;
