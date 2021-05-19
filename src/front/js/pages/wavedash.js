import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { DiscreteSlider } from "../component/slider.js";
import "../../styles/home.scss";

export const Wavedash = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid text-center my-5">
				<h1 className="text-danger">Wavedash</h1>
				<p className="text-white">This is where the tutorial content will go</p>
				<DiscreteSlider tech="wavedash" />
				<p className="text-white">My progress: {store.user.progress.wavedash}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid text-center my-5">
				<h1 className="text-danger">Wavedash</h1>
				<p className="text-white">This is where the tutorial content will go</p>
				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
