import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null)
		return (
			<div className="text-center mt-5">
				<h1 className="text-danger">The Melee Encyclopedia</h1>
				<p className="text-white">
					Check out the About/FAQ section first and then start learning some techniques!
				</p>
				<img
					style={{ height: "500px", width: "1000px" }}
					src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff2ef646-4cbf-4052-a4ba-01dd4e2eae72/dbdd7yv-dab04416-dd10-492a-8a53-2c5901269372.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZmMmVmNjQ2LTRjYmYtNDA1Mi1hNGJhLTAxZGQ0ZTJlYWU3MlwvZGJkZDd5di1kYWIwNDQxNi1kZDEwLTQ5MmEtOGE1My0yYzU5MDEyNjkzNzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QTNSWp4ROTZxw8CERSkr7-wAIBV28QQVO0vxjZAMal8"
				/>
			</div>
		);
	else
		return (
			<div className="text-center mt-5">
				<h1 className="text-danger">The Melee Encyclopedia</h1>
				<p className="text-white">Please sign-up/log-in to take full advantage of the site!</p>
				<img
					style={{ height: "500px", width: "1000px" }}
					src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff2ef646-4cbf-4052-a4ba-01dd4e2eae72/dbdd7yv-dab04416-dd10-492a-8a53-2c5901269372.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZmMmVmNjQ2LTRjYmYtNDA1Mi1hNGJhLTAxZGQ0ZTJlYWU3MlwvZGJkZDd5di1kYWIwNDQxNi1kZDEwLTQ5MmEtOGE1My0yYzU5MDEyNjkzNzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QTNSWp4ROTZxw8CERSkr7-wAIBV28QQVO0vxjZAMal8"
				/>
			</div>
		);
};
