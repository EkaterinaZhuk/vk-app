export default {
login(appId, perms) {
	return new Promise(executor: (resolve, reject) => {
		VK.init({apiId: apiId });
        VK.Auth.login(response => {
	if (response.session) {
		resolve(response);
	} else {
		reject(new Error(message: 'Не удалось авторизоваться'));
	}
}, perms);
});
},
 // Метод аутентификации //
callApi(method, params) {
	params.v = params.v || '5.78';
	return new Promise( executor: (resolve, reject) => {
		VK.api(method, params, response => {
			if (response.error) {
				reject(new Error(response.error.error msq));
			} else {
				resolve(response.response);
			}
		});
	})
}, // Метод вызвает удаленный метод из VK //
getUser(params = {}) {
	return this.callApi(method: 'users.get, params');
}, // Метод  //
};

// callApi('friends.get', {fields: 'city,country' })