import {authActs} from "../store/slices/auth";
import AuthAPI from "../api/AuthAPI";

class AuthService {
	static login(token, setFieldError, setSubmitting) {
		setSubmitting(true);
		return async dispatch => {
			try {
				const response = await AuthAPI.login(token);

				if (response.data.error) {
					setFieldError("token", "Неверный токен.");
				} else {
					localStorage.setItem(
						"token",
						response.data.result.session.session_token
					);

					dispatch(authActs.setUser(response.data.result.user));
					dispatch(authActs.setIsAuth(true));
				}
			} catch (e) {
				console.log(e);
			} finally {
				setSubmitting(false);
			}
		};
	}

	static fastLogin(token) {
		return async dispatch => {
			try {
				const response = await AuthAPI.login(token);

				if (!response.data.ok) {
					throw new Error("Неверный токен.");
				}

				localStorage.setItem(
					"token",
					response.data.result.session.session_token
				);

				dispatch(authActs.setUser(response.data.result.user));
				dispatch(authActs.setIsAuth(true));
			} catch (e) {
				console.log(e);
			}
		};
	}

	static check() {
		return async dispatch => {
			dispatch(authActs.setIsFetching(true));
			try {
				const response = await AuthAPI.check();
				localStorage.setItem(
					"token",
					response.data.result.session.session_token
				);
				dispatch(authActs.setIsAuth(true));
				dispatch(authActs.setUser(response.data.result.user));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(authActs.setIsFetching(false));
			}
		};
	}

	static logout() {
		return async dispatch => {
			dispatch(authActs.setIsFetching(true));
			try {
				await AuthAPI.logout();
				localStorage.removeItem("token");
				dispatch(authActs.setUser({}));
				dispatch(authActs.setIsAuth(false));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(authActs.setIsFetching(false));
			}
		};
	}
}

export default AuthService;
