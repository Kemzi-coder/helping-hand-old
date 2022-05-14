import axios from "axios";
import $api from "../axios";

class TaskAPI {
	static async fetchAll(params) {
		return axios.get(`${process.env.REACT_APP_API_URL}task/get_tasks`, {
			params
		});
	}

	static async fetchLast(params) {
		return axios.get(`${process.env.REACT_APP_API_URL}task/get_last`, {
			params
		});
	}

	static async fetchOneById(id) {
		return axios.get(`${process.env.REACT_APP_API_URL}task/get_task`, {
			params: {uuid: id}
		});
	}

	static async create(task) {
		return $api.post("task/create_task", {task});
	}

	static async close(id) {
		return $api.post("task/close_task", {uuid: id});
	}

	static async updateOne(id, task) {
		return $api.post("task/edit_task", {task, uuid: id});
	}
}

export default TaskAPI;
