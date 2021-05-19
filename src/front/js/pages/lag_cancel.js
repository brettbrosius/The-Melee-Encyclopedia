import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { DiscreteSlider } from "../component/slider.js";
import "../../styles/home.scss";

export const LagCancel = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid text-center my-5">
				<h1 className="text-danger">Lag Cancel</h1>
				<p className="text-white">This is where the tutorial content will go</p>
				<DiscreteSlider tech="lag_cancel" />
				<p className="text-white">My progress: {store.user.progress.lag_cancel}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid text-center my-5">
				<h1 className="text-danger">Lag Cancel</h1>
				<p className="text-white">This is where the tutorial content will go</p>
				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
