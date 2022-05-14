import {mentorsActs} from "../store/slices/mentors";
import MentorAPI from "../api/MentorAPI";

class MentorService {
	static fetchAll(params) {
		return async dispatch => {
			dispatch(mentorsActs.setIsFetching(true));
			try {
				const response = await MentorAPI.fetchAll(params);
				dispatch(mentorsActs.setItems(response.data.users));
				dispatch(mentorsActs.setPagesCount(response.data.total_page));
				dispatch(mentorsActs.setTotalCount(response.data.total));
				dispatch(mentorsActs.setCurrentPage(response.data.current_page));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(mentorsActs.setIsFetching(false));
			}
		};
	}

	static fetchMore(params) {
		return async dispatch => {
			dispatch(mentorsActs.setIsFetchingMore(true));
			try {
				const response = await MentorAPI.fetchAll(params);
				dispatch(mentorsActs.addItems(response.data.users));
				dispatch(mentorsActs.setPagesCount(response.data.total_page));
				dispatch(mentorsActs.setTotalCount(response.data.total));
				dispatch(mentorsActs.setCurrentPage(response.data.current_page));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(mentorsActs.setIsFetchingMore(false));
			}
		};
	}

	static fetchAllTop() {
		return async dispatch => {
			try {
				const response = await MentorAPI.fetchAllTop();
				dispatch(mentorsActs.setTopItems(response.data.mentors));
			} catch (e) {
				console.log(e);
			}
		};
	}
}

export default MentorService;
