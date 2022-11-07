export default {
	async forgetPasswordhandle(context, payload) {
		const userInfo = {
			username: payload.username,
			email: payload.email,
		};
		//const baseurl = payload.baseurl;
		//baseurl + '/login/forget-password'
		const response = await fetch(
			'http://localhost:3000/login/forget-password',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(userInfo),
			}
		);

		const responseData = await response.json();
		if (response.ok) {
			console.log(responseData);
			console.log(response.headers.accessToken);
		}

		if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
		context.commit('setUser', {
			userName: userInfo.username,
			accessToken: responseData.split(' ')[1],
		});
	},
	async signuphandle(context, payload) {
		const userInfo = {
			username: payload.username,
			password: payload.password,
			email: payload.email,
		};
		//const baseurl = payload.baseurl;
		//baseurl + '/login/forget-password'
		const response = await fetch('http://localhost:3000/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userInfo),
		});

		const responseData = await response.json();
		console.log(responseData);

		if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
		context.commit('setUser', {
			userName: userInfo.username,
			accessToken: responseData.split(' ')[1],
		});
	},
	async loginhandle(context, payload) {
		const userInfo = {
			username: payload.username,
			password: payload.password,
		};
		//const baseurl = payload.baseurl;
		//baseurl + '/login/forget-password'
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userInfo),
		});

		const responseData = await response.json();

		if (response.ok) {
			console.log(response);
			console.log(responseData);
			console.log(responseData.token);
			if (responseData.token && responseData.username) {
				console.log(responseData.token);
				console.log(responseData.username);
				context.commit('setUser', {
					userName: responseData.username,
					accessToken: responseData.token,
				});
			}
		} else if (!response.ok) {
			const error = new Error(responseData.error);
			throw error;
		}
	},
};
