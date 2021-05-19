import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { DiscreteSlider } from "/workspace/react-flask-hello/src/front/js/component/slider.js";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid">
				<h1 className="text-center my-5 text-danger">{store.user.username}</h1>
				<ul className="text-white" style={{ position: "absolute", left: "300px" }}>
					<li className="my-5">
						<Link to="/short_hop">Short-hop</Link> progress: {store.user.progress.short_hop}%<br />
						<br />
						<DiscreteSlider tech="short_hop" />
					</li>
					<li className="my-5">
						<Link to="/fast_fall">Fast-fall</Link> progress: {store.user.progress.fast_fall}%<br />
						<br />
						<DiscreteSlider tech="fast_fall" />
					</li>
					<li className="my-5">
						<Link to="/lag_cancel">L-cancel</Link> progress: {store.user.progress.lag_cancel}%<br />
						<br />
						<DiscreteSlider tech="lag_cancel" />
					</li>
					<li className="my-5">
						<Link to="/wavedash">Wavedash</Link> progress: {store.user.progress.wavedash}%<br />
						<br />
						<DiscreteSlider tech="wavedash" />
					</li>
					<li className="my-5">
						<Link to="/dash_dance">Dash-dance</Link> progress: {store.user.progress.dash_dance}%<br />
						<br />
						<DiscreteSlider tech="dash_dance" />
					</li>
					<li className="my-5">
						<Link to="/teching">Teching</Link> progress: {store.user.progress.teching}%<br />
						<br />
						<DiscreteSlider tech="teching" />
					</li>
				</ul>
			</div>
		);
	else
		return (
			<div className="container-fluid">
				<h1 className="text-center text-danger my-5">Please sign-up/log-in to view your profile</h1>
			</div>
		);
};
