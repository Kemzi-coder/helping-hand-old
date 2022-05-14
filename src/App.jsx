import React, {useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import "./app.css";
import {useDispatch, useSelector} from "react-redux";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";
import AuthService from "./services/AuthService";
import LoaderWrapper from "./components/UI/LoaderWrapper/LoaderWrapper";
import Loader from "./components/UI/Loader/Loader";
import useIsMounting from "./hooks/useIsMounting";

const App = () => {
	const dispatch = useDispatch();
	const isMounting = useIsMounting();
	const isAuth = useSelector(state => state.auth.isAuth);
	const isFetching = useSelector(state => state.auth.isFetching);

	// Checking for authorization
	useEffect(() => {
		if (localStorage.getItem("token")) {
			dispatch(AuthService.check());
		}
	}, [dispatch]);

	if (isFetching || isMounting) {
		return (
			<LoaderWrapper>
				<Loader />
			</LoaderWrapper>
		);
	}

	return (
		<Router>
			<div className="wrapper">
				{isAuth && <Header />}
				<main>
					<AppRouter />
				</main>
			</div>
		</Router>
	);
};

export default App;
