import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	let history = useHistory();
	const login = e => {
		actions.userLogin(e, history);
	};

	return (
		<div className="text-center my-5">
			<h1 className="text-danger">Log-in</h1>
			<form onSubmit={login}>
				<input className="mt-2" id="username" type="text" placeholder="Username" />
				<br />
				<input className="mt-2" id="password" type="password" placeholder="Password" />
				<br />
				<input className="text-white btn btn-danger mt-2" type="submit" value="Submit" />
			</form>
		</div>
	);
};
