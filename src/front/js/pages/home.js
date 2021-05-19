import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null)
		return (
			<div className="text-center mt-5">
				<h1 className="text-danger">Melee Encyclopedia Project</h1>
				<p className="text-white">Click a technique on the sidebar to get started!</p>
			</div>
		);
	else
		return (
			<div className="text-center mt-5">
				<h1 className="text-danger">Melee Encyclopedia Project</h1>
				<p className="text-white">Please sign-up/log-in to take full advantage of the site!</p>
			</div>
		);
};
