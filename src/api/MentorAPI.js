import axios from "axios";

class MentorAPI {
	static fetchAll(params) {
		return axios.get(`${process.env.REACT_APP_API_URL}user/get_mentors`, {
			params
		});
	}

	static fetchAllTop() {
		return axios.get(`${process.env.REACT_APP_API_URL}user/get_topmentors`);
	}
}

export default MentorAPI;
