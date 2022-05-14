import {createSlice} from "@reduxjs/toolkit";

const task = createSlice({
	name: "task",
	initialState: {
		item: {},
		isFetching: false
	},
	reducers: {
		setItem(state, action) {
			state.item = action.payload;
		},
		setIsFetching(state, action) {
			state.isFetching = action.payload;
		},
		setDescription(state, action) {
			state.item.description = action.payload;
		}
	}
});

export default task.reducer;
export const taskActs = task.actions;
