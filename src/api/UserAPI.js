import axios from "axios";
import $api from "../axios";

class UserAPI {
	static fetchAll(params) {
		return axios.get(`${process.env.REACT_APP_API_URL}user/get_users`, {
			params
		});
	}

	static fetchOneById(id) {
		return axios.get(`${process.env.REACT_APP_API_URL}user/get_user`, {
			params: {uuid: id}
		});
	}

	static async updateOne(user) {
		return $api.post("user/change_user", {user});
	}
}

export default UserAPI;
