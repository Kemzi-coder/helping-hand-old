import {createSlice} from "@reduxjs/toolkit";

const users = createSlice({
	name: "users",
	initialState: {
		items: [],
		isFetching: false,
		isFetchingMore: false,
		limit: 5,
		totalCount: 0,
		currentPage: 1,
		pagesCount: 1
	},
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
		addItems(state, action) {
			state.items = [...state.items, ...action.payload];
		},
		setIsFetching(state, action) {
			state.isFetching = action.payload;
		},
		setIsFetchingMore(state, action) {
			state.isFetchingMore = action.payload;
		},
		setTotalCount(state, action) {
			state.totalCount = action.payload;
		},
		setPagesCount(state, action) {
			state.pagesCount = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		}
	}
});

export default users.reducer;
export const usersActs = users.actions;
