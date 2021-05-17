import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { ShortHop } from "./pages/short_hop";
import { FastFall } from "./pages/fast_fall";
import { LagCancel } from "./pages/lag_cancel";
import { Wavedash } from "./pages/wavedash";
import { DashDance } from "./pages/dash_dance";
import { Teching } from "./pages/teching";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/short_hop">
							<ShortHop />
						</Route>
						<Route exact path="/fast_fall">
							<FastFall />
						</Route>
						<Route exact path="/lag_cancel">
							<LagCancel />
						</Route>
						<Route exact path="/wavedash">
							<Wavedash />
						</Route>
						<Route exact path="/dash_dance">
							<DashDance />
						</Route>
						<Route exact path="/teching">
							<Teching />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
