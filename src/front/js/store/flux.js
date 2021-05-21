const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			token: null
		},
		actions: {
			userLogout: history => {
				setStore({ token: null });
				setStore({ user: null });
				localStorage.clear();
				history.push("/");
			},
			checkUser: () => {
				let local_token = localStorage.getItem("local_token");
				if (local_token != null) setStore({ token: local_token });
				getActions().getUser();
			},
			getUser: () => {
				fetch("https://3001-magenta-grouse-kf6evau0.ws-us07.gitpod.io/api/user/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token
					}
				})
					.then(response => response.json())
					.then(data => {
						setStore({ user: data });
					});
			},
			userSignup: (event, history) => {
				event.preventDefault();
				let username = event.target.elements[0].value;
				let password = event.target.elements[1].value;
				let final = { username, password };
				fetch("https://3001-magenta-grouse-kf6evau0.ws-us07.gitpod.io/api/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(final)
				})
					.then(response => response.json())
					.then(data => {
						setStore({ token: data.access_token });
						getActions().getUser();
						localStorage.clear();
						localStorage.setItem("local_token", data.access_token);
						history.push("/");
					});
			},
			userLogin: (event, history) => {
				event.preventDefault();
				let username = event.target.elements[0].value;
				let password = event.target.elements[1].value;
				let final = { username, password };
				fetch("https://3001-magenta-grouse-kf6evau0.ws-us07.gitpod.io/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(final)
				})
					.then(response => response.json())
					.then(data => {
						setStore({ token: data.access_token });
						getActions().getUser();
						localStorage.clear();
						localStorage.setItem("local_token", data.access_token);
						history.push("/");
					});
			},
			updateProgress: (progress, tech) => {
				let final = { [tech]: progress };
				fetch(`https://3001-magenta-grouse-kf6evau0.ws-us07.gitpod.io/api/progress/${getStore().user.id}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token
					},
					body: JSON.stringify(final)
				}).then(response => {
					response.json();
					getActions().getUser();
				});
			}
		}
	};
};

export default getState;
