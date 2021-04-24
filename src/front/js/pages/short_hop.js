import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const ShortHop = () => {
	const { store, actions } = useContext(Context);

	const updateProgress = e => {
		actions.updateProgress(e, "short_hop");
	};

	if (store.token != null)
		return (
			<div className="container-fluid">
				<h1>Short hop</h1>
				<p>This is where the tutorial content will go</p>
				<p>Update your progress on a scale of 1-100 below:</p>
				<form onSubmit={updateProgress}>
					<input type="number" id="progress" name="progress" min="0" max="100" />
					<input className="btn btn-secondary mt-2" type="submit" value="Submit" />
				</form>
				<p>My current progress: {store.user[1].short_hop}</p>
			</div>
		);
	else
		return (
			<div className="container-fluid">
				<h1>Short hop</h1>
				<p>This is where the tutorial content will go</p>
				<p>Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
