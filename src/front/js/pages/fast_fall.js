import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { DiscreteSlider } from "../component/slider.js";

export const FastFall = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid text-center my-5">
				<h1 className="text-danger">Fast Fall</h1>
				<p className="text-white">This is where the tutorial content will go</p>
				<DiscreteSlider tech="fast_fall" />
				<p className="text-white">My progress: {store.user.progress.fast_fall}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid text-center my-5">
				<h1 className="text-danger">Fast Fall</h1>
				<p className="text-white">This is where the tutorial content will go</p>
				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
