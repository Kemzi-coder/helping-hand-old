import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ItemsHeader from "../UI/ItemsHeader/ItemsHeader";
import SearchBar from "../UI/SearchBar/SearchBar";
import Dropdown from "../UI/Dropdown/Dropdown";
import DropdownOption from "../UI/DropdownOption/DropdownOption";
import styles from "./TasksHeader.module.css";
import {tasksActs} from "../../store/slices/tasks";

const TasksHeader = () => {
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const dispatch = useDispatch();
	const sortName = useSelector(state => state.tasks.sortBy.name);
	const searchQuery = useSelector(state => state.tasks.searchQuery);
	const isFetching = useSelector(state => state.tasks.isFetching);

	const handleSearch = query => {
		dispatch(tasksActs.setSearchQuery(query));
	};

	return (
		<ItemsHeader className={styles.header}>
			<SearchBar
				defaultValue={searchQuery}
				isSearching={isFetching}
				onSearch={handleSearch}
				className={styles.search}
			/>
			<Dropdown
				className={styles.dropdown}
				buttonClassName={styles.dropdown}
				isVisible={isDropdownVisible}
				setIsVisible={setIsDropdownVisible}
				title="Сортировка"
				value={sortName}
			>
				<DropdownOption
					onClick={value => {
						dispatch(tasksActs.setSortBy({name: value, value: ""}));
						setIsDropdownVisible(false);
					}}
					isActive={sortName === "Все"}
					value="Все"
				/>
				<DropdownOption
					onClick={value => {
						dispatch(tasksActs.setSortBy({name: value, value: "open"}));
						setIsDropdownVisible(false);
					}}
					isActive={sortName === "Открытые"}
					value="Открытые"
				/>
				<DropdownOption
					onClick={value => {
						dispatch(tasksActs.setSortBy({name: value, value: "closed"}));
						setIsDropdownVisible(false);
					}}
					isActive={sortName === "Закрытые"}
					value="Закрытые"
				/>
			</Dropdown>
		</ItemsHeader>
	);
};

export default TasksHeader;
