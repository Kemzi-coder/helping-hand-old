import {createSlice} from "@reduxjs/toolkit";

const mentors = createSlice({
	name: "mentors",
	initialState: {
		items: [],
		topItems: [],
		isFetching: false,
		isFetchingMore: false,
		isTopFetching: false,
		pagesCount: 1,
		limit: 5,
		totalCount: 0,
		currentPage: 1
	},
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
		addItems(state, action) {
			state.items = [...state.items, ...action.payload];
		},
		setTopItems(state, action) {
			state.topItems = action.payload;
		},
		setIsFetching(state, action) {
			state.isFetching = action.payload;
		},
		setIsTopFetching(state, action) {
			state.isTopFetching = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setPagesCount(state, action) {
			state.pagesCount = action.payload;
		},
		setTotalCount(state, action) {
			state.totalCount = action.payload;
		},
		setIsFetchingMore(state, action) {
			state.isFetchingMore = action.payload;
		}
	}
});

export default mentors.reducer;
export const mentorsActs = mentors.actions;
