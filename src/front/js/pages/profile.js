import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<h1 className="text-center my-5">{store.user[0].username}</h1>
			<ul className="my-5">
				<li className="my-5">
					<Link to="/short_hop">Short-hop</Link> progress: {store.user[1].short_hop}
				</li>
				<li className="my-5">
					<Link to="/fast_fall">Fast-fall</Link> progress: {store.user[1].fast_fall}
				</li>
				<li className="my-5">
					<Link to="/lag_cancel">L-cancel</Link> progress: {store.user[1].lag_cancel}
				</li>
				<li className="my-5">
					<Link to="/wavedash">Wavedash</Link> progress: {store.user[1].wavedash}
				</li>
				<li className="my-5">
					<Link to="/dash_dance">Dash-dance</Link> progress: {store.user[1].dash_dance}
				</li>
				<li className="my-5">
					<Link to="/teching">Teching</Link> progress: {store.user[1].teching}
				</li>
			</ul>
		</div>
	);
};
