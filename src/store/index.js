import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/auth";
import users from "./slices/users";
import tasks from "./slices/tasks";
import profile from "./slices/profile";
import task from "./slices/task";
import mentors from "./slices/mentors";

const store = configureStore({
	reducer: {
		auth,
		users,
		tasks,
		profile,
		task,
		mentors
	}
});

export default store;
