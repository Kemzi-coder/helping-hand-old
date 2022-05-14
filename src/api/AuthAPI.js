import axios from "axios";
import $api from "../axios";

class AuthAPI {
	static async login(token) {
		return axios.post(`${process.env.REACT_APP_API_URL}auth/login`, {
			token
		});
	}

	static async check() {
		return $api.post("auth/check_session_token");
	}

	static async logout() {
		return $api.post("auth/logout");
	}
}

export default AuthAPI;
