import React, {useState} from "react";
import classNames from "classnames";
import {ReactComponent as SearchIcon} from "../../../assets/images/search.svg";
import Input from "../Input/Input";
import styles from "./SearchBar.module.css";

const noop = () => {};

const SearchBar = ({
	className,
	onSearch = noop,
	isSearching,
	defaultValue = ""
}) => {
	const [value, setValue] = useState(defaultValue);

	const handleChange = e => setValue(e.target.value);

	const handleKeyDown = e => {
		if (e.key === "Enter" && !isSearching) {
			onSearch(value);
		}
	};

	const handleClick = () => {
		onSearch(value);
	};

	return (
		<div className={classNames(className, styles.search)}>
			<Input
				onKeyDown={handleKeyDown}
				onChange={handleChange}
				className={styles.input}
				value={value}
				placeholder="Поиск"
				type="text"
			/>

			<button
				className={styles.button}
				disabled={isSearching}
				onClick={handleClick}
				type="button"
			>
				<SearchIcon />
			</button>
		</div>
	);
};

export default SearchBar;
