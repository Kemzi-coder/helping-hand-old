import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Page from "../../components/UI/Page/Page";
import styles from "./Profile.module.css";
import Loader from "../../components/UI/Loader/Loader";
import UserService from "../../services/UserService";
import Content from "../../components/UI/Content/Content";
import useIsMounting from "../../hooks/useIsMounting";

const Profile = () => {
	const isMounting = useIsMounting();
	const {id} = useParams();
	const dispatch = useDispatch();
	const isFetching = useSelector(state => state.profile.isFetching);
	const profile = useSelector(state => state.profile.profile);
	const userId = useSelector(state => state.auth.user.uuid);
	const isMyProfile = id === userId;

	useEffect(() => {
		dispatch(UserService.fetchOneById(id));
	}, [dispatch, id]);

	if (isFetching || isMounting) {
		return <Loader className={styles.loader} />;
	}

	return (
		<Page>
			<div className="container container--small">
				<ProfileHeader
					avatar={profile.photo}
					isMentor={profile.mentor}
					username={profile.name}
				/>

				<Content className={styles.content}>
					<ProfileInfo
						id={id}
						isMentor={profile.mentor}
						description={profile.description}
						isMyProfile={isMyProfile}
					/>
				</Content>
			</div>
		</Page>
	);
};

export default Profile;
