import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">The Melee Encyclopedia</span>
			</Link>

			<div className="ml-auto">
				<Link to="/profile">
					<button className="text-center btn btn-warning">My Profile</button>
				</Link>
				<Link to="/signup">
					<button className="btn btn-primary">Sign-up</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-success">Log-in</button>
				</Link>
			</div>
		</nav>
	);
};
