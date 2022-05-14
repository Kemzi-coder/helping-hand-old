import {createSlice} from "@reduxjs/toolkit";

const profile = createSlice({
	name: "profile",
	initialState: {
		profile: {},
		lastItems: [],
		isLastItemsFetching: false,
		totalCount: 0,
		isFetching: false
	},
	reducers: {
		setProfile(state, action) {
			state.profile = action.payload;
		},
		setIsLastItemsFetching(state, action) {
			state.isLastItemsFetching = action.payload;
		},
		setLastItems(state, action) {
			state.lastItems = action.payload;
		},
		setIsFetching(state, action) {
			state.isFetching = action.payload;
		},
		setDescription(state, action) {
			state.profile.description = action.payload;
		}
	}
});

export default profile.reducer;
export const profileActs = profile.actions;
