import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Sidebar = () => {
	return (
		<div className="wrapper">
			<nav id="sidebar">
				<div className="sidebar-header">
					<h3>Bootstrap Sidebar</h3>
					<strong>BS</strong>
				</div>

				<ul className="list-unstyled components">
					<li className="active">
						<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
							<i className="fas fa-home" />
							Home
						</a>
						<ul className="collapse list-unstyled" id="homeSubmenu">
							<li>
								<a href="#">Home 1</a>
							</li>
							<li>
								<a href="#">Home 2</a>
							</li>
							<li>
								<a href="#">Home 3</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">
							<i className="fas fa-briefcase" />
							About
						</a>
						<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
							<i className="fas fa-copy" />
							Pages
						</a>
						<ul className="collapse list-unstyled" id="pageSubmenu">
							<li>
								<a href="#">Page 1</a>
							</li>
							<li>
								<a href="#">Page 2</a>
							</li>
							<li>
								<a href="#">Page 3</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>

			<div id="content">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<button type="button" id="sidebarCollapse" className="btn btn-info">
							<i className="fas fa-align-left" />
							<span>Toggle Sidebar</span>
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
};
