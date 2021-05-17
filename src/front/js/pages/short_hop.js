import React, { useContext } from "react";
import { DiscreteSlider } from "../component/slider.js";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const ShortHop = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid" style={{ position: "absolute", left: "300px" }}>
				<h1>Short hop</h1>
				<p>This is where the tutorial content will go</p>

				<DiscreteSlider tech="short_hop" />
				<p>My current progress: {store.user.progress.short_hop}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid" style={{ position: "absolute", left: "300px" }}>
				<h1>Short hop</h1>
				<p>This is where the tutorial content will go</p>
				<p>Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
