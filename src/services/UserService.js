import UserAPI from "../api/UserAPI";
import {profileActs} from "../store/slices/profile";
import {authActs} from "../store/slices/auth";
import {usersActs} from "../store/slices/users";

class UserService {
	static fetchAll(params) {
		return async dispatch => {
			dispatch(usersActs.setIsFetching(true));
			try {
				const response = await UserAPI.fetchAll(params);

				dispatch(usersActs.setItems(response.data.users));
				dispatch(usersActs.setTotalCount(response.data.total));
				dispatch(usersActs.setPagesCount(response.data.total_page));
				dispatch(usersActs.setCurrentPage(response.data.current_page));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(usersActs.setIsFetching(false));
			}
		};
	}

	static fetchMore(params) {
		return async dispatch => {
			dispatch(usersActs.setIsFetchingMore(true));
			try {
				const response = await UserAPI.fetchAll(params);

				dispatch(usersActs.addItems(response.data.users));
				dispatch(usersActs.setTotalCount(response.data.total));
				dispatch(usersActs.setPagesCount(response.data.total_page));
				dispatch(usersActs.setCurrentPage(response.data.current_page));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(usersActs.setIsFetchingMore(false));
			}
		};
	}

	static fetchOneById(id) {
		return async dispatch => {
			dispatch(profileActs.setIsFetching(true));
			try {
				const response = await UserAPI.fetchOneById(id);

				dispatch(profileActs.setProfile(response.data.user));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(profileActs.setIsFetching(false));
			}
		};
	}

	static updateOne(user) {
		return async dispatch => {
			try {
				const response = await UserAPI.updateOne(user);
				dispatch(authActs.setUser(response.data.user));
			} catch (e) {
				console.log(e);
			}
		};
	}
}

export default UserService;
