import axios from "axios";

const $api = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

// Attaching an authorization token to request
$api.interceptors.request.use(config => {
	config.data = {...config.data, session_token: localStorage.getItem("token")};

	return config;
});

$api.interceptors.response.use(
	config => {
		return config;
	},
	async error => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_API_URL}/auth/check_session_token`
				);
				localStorage.setItem(
					"token",
					response.data.result.session.session_token
				);
				return $api.request(originalRequest);
			} catch (e) {
				console.log("Not authorized!");
			}
		}
		throw error;
	}
);

export default $api;
