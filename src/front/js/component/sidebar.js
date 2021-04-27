import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/sidebar.scss";

export const Sidebar = () => {
	return (
		<div id="wrapper">
			<div id="sidebar-wrapper">
				<ul className="sidebar-nav">
					<li>Home</li>
					<li>About</li>
					<li>Techniques</li>
					<li>Profile/Login/Signup/Logout</li>
				</ul>
			</div>

			<div id="page-content-wrapper" />
		</div>
	);
};
