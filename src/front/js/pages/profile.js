import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid">
				<h1 className="text-center my-5">{store.user.username}</h1>
				<ul className="" style={{ position: "absolute", left: "300px" }}>
					<li className="my-5">
						<Link to="/short_hop">Short-hop</Link> progress: {store.user.progress.short_hop}%
					</li>
					<li className="my-5">
						<Link to="/fast_fall">Fast-fall</Link> progress: {store.user.progress.fast_fall}%
					</li>
					<li className="my-5">
						<Link to="/lag_cancel">L-cancel</Link> progress: {store.user.progress.lag_cancel}%
					</li>
					<li className="my-5">
						<Link to="/wavedash">Wavedash</Link> progress: {store.user.progress.wavedash}%
					</li>
					<li className="my-5">
						<Link to="/dash_dance">Dash-dance</Link> progress: {store.user.progress.dash_dance}%
					</li>
					<li className="my-5">
						<Link to="/teching">Teching</Link> progress: {store.user.progress.teching}%
					</li>
				</ul>
			</div>
		);
	else
		return (
			<div style={{ position: "absolute", left: "300px" }}>
				<h1>Please sign-up/log-in to view your profile</h1>
			</div>
		);
};
