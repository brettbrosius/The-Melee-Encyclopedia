import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null)
		return (
			<div className="text-center mt-5">
				<h1>Melee Encyclopedia Project</h1>
				<p>Click a technique on the sidebar to get started!</p>
			</div>
		);
	else
		return (
			<div className="text-center mt-5">
				<h1>Melee Encyclopedia Project</h1>
				<p>Please sign-up/log-in to take full advantage of the site!</p>
			</div>
		);
};
