import {createSlice} from "@reduxjs/toolkit";

const auth = createSlice({
	name: "auth",
	initialState: {
		user: {},
		isAuth: false,
		isFetching: false
	},
	reducers: {
		setIsAuth(state, action) {
			state.isAuth = action.payload;
		},
		setUser(state, action) {
			state.user = action.payload;
		},
		setIsFetching(state, action) {
			state.isFetching = action.payload;
		}
	}
});

export default auth.reducer;
export const authActs = auth.actions;
