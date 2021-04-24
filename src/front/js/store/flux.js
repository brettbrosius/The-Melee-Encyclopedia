const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			token: null
		},
		actions: {
			getUser: () => {
				fetch("https://3001-magenta-grouse-kf6evau0.ws-us03.gitpod.io/api/user/", {
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
				fetch("https://3001-magenta-grouse-kf6evau0.ws-us03.gitpod.io/api/signup", {
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
						history.push("/");
					});
			},
			userLogin: (event, history) => {
				event.preventDefault();
				let username = event.target.elements[0].value;
				let password = event.target.elements[1].value;
				let final = { username, password };
				// localStorage.setItem("local_user", final);
				// console.log(localStorage.getItem("local_user"));
				fetch("https://3001-magenta-grouse-kf6evau0.ws-us03.gitpod.io/api/login", {
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
						history.push("/");
					});
			},
			updateProgress: (event, tech) => {
				event.preventDefault();
				let progress = event.target.progress.value;
				let final = { [tech]: progress };
				console.log(final);
				fetch(`https://3001-magenta-grouse-kf6evau0.ws-us03.gitpod.io/api/progress/${getStore().user[0].id}`, {
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
