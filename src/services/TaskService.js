import TaskAPI from "../api/TaskAPI";
import {tasksActs} from "../store/slices/tasks";
import {taskActs} from "../store/slices/task";
import {profileActs} from "../store/slices/profile";

class TaskService {
	static fetchAll(params) {
		return async dispatch => {
			dispatch(tasksActs.setIsFetching(true));
			try {
				const response = await TaskAPI.fetchAll(params);

				dispatch(tasksActs.setItems(response.data.tasks));
				dispatch(tasksActs.setPagesCount(response.data.total_page));
				dispatch(tasksActs.setTotalCount(response.data.total));
				dispatch(tasksActs.setCurrentPage(response.data.current_page));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(tasksActs.setIsFetching(false));
			}
		};
	}

	static fetchLast(params) {
		return async dispatch => {
			dispatch(profileActs.setIsLastItemsFetching(true));
			try {
				const response = await TaskAPI.fetchLast(params);

				dispatch(profileActs.setLastItems(response.data.tasks));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(profileActs.setIsLastItemsFetching(false));
			}
		};
	}

	static fetchMore(params) {
		return async dispatch => {
			dispatch(tasksActs.setIsFetchingMore(true));
			try {
				const response = await TaskAPI.fetchAll(params);

				dispatch(tasksActs.addItems(response.data.tasks));
				dispatch(tasksActs.setPagesCount(response.data.total_page));
				dispatch(tasksActs.setTotalCount(response.data.total));
				dispatch(tasksActs.setCurrentPage(response.data.current_page));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(tasksActs.setIsFetchingMore(false));
			}
		};
	}

	static fetchOneById(id) {
		return async dispatch => {
			dispatch(taskActs.setIsFetching(true));
			try {
				const response = await TaskAPI.fetchOneById(id);

				dispatch(taskActs.setItem(response.data.task));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(taskActs.setIsFetching(false));
			}
		};
	}

	static create(task, setSubmitting, params) {
		return async dispatch => {
			setSubmitting(true);
			try {
				await TaskAPI.create(task);
				dispatch(this.fetchAll(params));
			} catch (e) {
				console.log(e);
			} finally {
				setSubmitting(false);
			}
		};
	}

	static async close(id) {
		try {
			const closeResponse = await TaskAPI.close(id);
			console.log(closeResponse);
		} catch (e) {
			console.log(e.response?.data?.message);
		}
	}

	static async updateOne(id, task) {
		try {
			const response = await TaskAPI.updateOne(id, task);
			console.log(response);
		} catch (e) {
			console.log(e);
		}
	}
}

export default TaskService;
