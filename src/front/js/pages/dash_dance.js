import React, { useContext } from "react";
import { DiscreteSlider } from "../component/slider.js";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const DashDance = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid text-center my-5">
				<h1 className="text-danger">Dash Dance</h1>
				<p className="text-white">This is where the tutorial content will go</p>

				<DiscreteSlider tech="dash_dance" />
				<p className="text-white">My current progress: {store.user.progress.dash_dance}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid text-center my-5">
				<h1 className="text-danger">Dash Dance</h1>
				<p className="text-white">This is where the tutorial content will go</p>
				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
