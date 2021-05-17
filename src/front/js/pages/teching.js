import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { DiscreteSlider } from "../component/slider.js";
import "../../styles/home.scss";

export const Teching = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid" style={{ position: "absolute", left: "300px" }}>
				<h1>Teching</h1>
				<p>This is where the tutorial content will go</p>
				<DiscreteSlider tech="teching" />
				<p>My progress: {store.user.progress.teching}</p>
			</div>
		);
	else
		return (
			<div className="container-fluid" style={{ position: "absolute", left: "300px" }}>
				<h1>Teching</h1>
				<p>This is where the tutorial content will go</p>
				<p>Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
