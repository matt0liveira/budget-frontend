const BASE_URL = "http://127.0.0.1:80";

const post = async (body, endpoint) => {
	const request = await fetch(BASE_URL+endpoint, {
			method: "POST",
			body: body,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
	});

	return request;
};

const Api = {
	
	addUser: async body => {
		return await post(body, "/users");
	},

};

export default () => Api;