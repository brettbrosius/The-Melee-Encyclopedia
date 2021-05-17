import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>About the Melee Encyclopedia/FAQ</h1>
			<p>gonna put some shit in here about how to use the site and what its for should be cool :thumbsup:</p>
		</div>
	);
};
