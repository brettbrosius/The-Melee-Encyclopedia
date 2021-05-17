import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	let history = useHistory();
	const logout = () => {
		actions.userLogout(history);
	};

	if (store.token != null)
		return (
			<nav
				className="d-flex flex-column p-3 text-white bg-dark"
				style={{ width: "280px", height: "100vh", position: "absolute" }}>
				<Link to="/">
					<h1 className="navbar-brand mb-0 h1 text-white">The Melee Encyclopedia</h1>
				</Link>

				<hr />
				<ul className="nav nav-pills flex-column mb-auto">
					<li>
						<h4 className="nav-link text-white">Techniques</h4>
						<ul>
							<Link to="/short_hop">
								<li className="nav-link text-white">Short Hop</li>
							</Link>
							<Link to="/fast_fall">
								<li className="nav-link text-white">Fast Fall</li>
							</Link>
							<Link to="/lag_cancel">
								<li className="nav-link text-white">Lag Cancel</li>
							</Link>
							<Link to="/dash_dance">
								<li className="nav-link text-white">Dash Dance</li>
							</Link>
							<Link to="/wavedash">
								<li className="nav-link text-white">Wavedash</li>
							</Link>
							<Link to="/teching">
								<li className="nav-link text-white">Teching</li>
							</Link>
						</ul>
					</li>
					<li>
						<Link to="/about">
							<h4 className="nav-link text-white">About/FAQ</h4>
						</Link>
					</li>
					<hr />
					<li>
						<Link to="/profile">
							<button className="btn btn-warning">My profile</button>
						</Link>
						<button onClick={logout} className="btn btn-danger">
							Log-out
						</button>
					</li>
				</ul>
			</nav>
		);
	else
		return (
			<nav
				className="d-flex flex-column p-3 text-white bg-dark"
				style={{ width: "280px", height: "100vh", position: "absolute" }}>
				<Link to="/">
					<h1 className="navbar-brand mb-0 h1 text-white">The Melee Encyclopedia</h1>
				</Link>

				<hr />
				<ul className="nav nav-pills flex-column mb-auto">
					<li>
						<h4 className="nav-link text-white">Techniques</h4>
						<ul>
							<Link to="/short_hop">
								<li className="nav-link text-white">Short Hop</li>
							</Link>
							<Link to="/fast_fall">
								<li className="nav-link text-white">Fast Fall</li>
							</Link>
							<Link to="/lag_cancel">
								<li className="nav-link text-white">Lag Cancel</li>
							</Link>
							<Link to="/dash_dance">
								<li className="nav-link text-white">Dash Dance</li>
							</Link>
							<Link to="/wavedash">
								<li className="nav-link text-white">Wavedash</li>
							</Link>
							<Link to="/teching">
								<li className="nav-link text-white">Teching</li>
							</Link>
						</ul>
					</li>
					<li>
						<Link to="/about">
							<h4 className="nav-link text-white">About/FAQ</h4>
						</Link>
					</li>
					<hr />
					<Link to="/signup">
						<button className="btn btn-primary">Sign-up</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-success">Log-in</button>
					</Link>
				</ul>
			</nav>
		);
};
