import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	let history = useHistory();
	const signup = e => {
		actions.userSignup(e, history);
	};

	return (
		<div className="text-center mt-5">
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<h1>Sign-up</h1>
			<form onSubmit={signup}>
				<input className="mt-2" id="username" type="text" placeholder="Username" />
				<br />
				<input className="mt-2" id="password" type="password" placeholder="Password" />
				<br />
				<input className="btn btn-secondary mt-2" type="submit" value="Submit" />
			</form>
		</div>
	);
};
