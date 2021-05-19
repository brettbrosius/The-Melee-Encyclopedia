import React, { useContext } from "react";
import { DiscreteSlider } from "../component/slider.js";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const ShortHop = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid text-center my-5">
				<h1 className="text-danger">Short hop</h1>
				<p className="text-white">This is where the tutorial content will go</p>

				<DiscreteSlider tech="short_hop" />
				<p className="text-white">My current progress: {store.user.progress.short_hop}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid text-center my-5">
				<h1 className="text-danger">Short hop</h1>
				<p className="text-white">This is where the tutorial content will go</p>
				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
