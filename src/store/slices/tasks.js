import {createSlice} from "@reduxjs/toolkit";

const tasks = createSlice({
	name: "tasks",
	initialState: {
		items: [],
		totalCount: 0,
		pagesCount: 0,
		currentPage: 1,
		limit: 10,
		searchQuery: "",
		isFetching: false,
		isFetchingMore: false,
		isCreating: false,
		sortBy: {
			name: "Все",
			value: ""
		}
	},
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
		setIsCreating(state, action) {
			state.isCreating = action.payload;
		},
		addItems(state, action) {
			state.items = [...state.items, ...action.payload];
		},
		setIsAuth(state, action) {
			state.isAuth = action.payload;
		},
		setPagesCount(state, action) {
			state.pagesCount = action.payload;
		},
		setTotalCount(state, action) {
			state.totalCount = action.payload;
		},
		setIsFetching(state, action) {
			state.isFetching = action.payload;
		},
		setIsFetchingMore(state, action) {
			state.isFetchingMore = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setSearchQuery(state, action) {
			state.searchQuery = action.payload;
		},
		setSortBy(state, action) {
			state.sortBy = action.payload;
		}
	}
});

export default tasks.reducer;
export const tasksActs = tasks.actions;
