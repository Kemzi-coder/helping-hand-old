import React from "react";
import styles from "./LoaderWrapper.module.css";

const LoaderWrapper = ({children}) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default LoaderWrapper;
