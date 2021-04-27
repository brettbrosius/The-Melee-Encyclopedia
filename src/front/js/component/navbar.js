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
			<nav className="d-flex flex-column p-3 text-white bg-dark" id="sidebar">
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
					<button onClick={logout} className="btn btn-danger">
						Log-out
					</button>
				</div>
			</nav>
		);
	else
		return (
			<nav className="d-flex flex-column p-3 text-white bg-dark" style={{ width: "280px" }}>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">The Melee Encyclopedia</span>
				</Link>

				<hr />
				<ul className="nav nav-pills flex-column mb-auto">
					<li className="nav-item text-decoration-none">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link text-white">
							Techniques
						</a>
					</li>
					<li>
						<a href="#" className="nav-link text-white">
							About
						</a>
					</li>
					<li>
						<a href="#" className="nav-link text-white">
							Products
						</a>
					</li>
					<li>
						<Link to="/signup">
							<button className="btn btn-primary">Sign-up</button>
						</Link>
						<Link to="/login">
							<button className="btn btn-success">Log-in</button>
						</Link>
					</li>
				</ul>
			</nav>
		);
};
// {/*
// 				<div className="">
// <Link to="/signup">
// 	<button className="btn btn-primary">Sign-up</button>
// // </Link>
// 					<Link to="/login">
// 						<button className="btn btn-success">Log-in</button>
// 					</Link>
// 				</div> */}

// 		);
// };

{
	/* <div class="d-flex flex-column p-3 text-white bg-dark" style="width: 280px;">
  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    <span class="fs-4">Sidebar</span>
  </a>
  <hr>
  <ul class="nav nav-pills flex-column mb-auto">
    <li class="nav-item">
      <a href="#" class="nav-link active">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
        Home
      </a>
    </li>
    <li>
      <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
        Dashboard
      </a>
    </li>
    <li>
      <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
        Orders
      </a>
    </li>
    <li>
      <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
        Products
      </a>
    </li>
    <li>
      <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
        Customers
      </a>
    </li>
  </ul>
  <hr>
  <div class="dropdown">
    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle me-2">
      <strong>mdo</strong>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
      <li><a class="dropdown-item" href="#">New project...</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Profile</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Sign out</a></li>
    </ul>
  </div>
</div> */
}
