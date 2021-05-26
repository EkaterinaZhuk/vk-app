export default {
  login(appId, perms) {
    return new Promise((resolve, reject) => {
      VK.init({ apiId: appId });
      VK.Auth.login((response) => {
        if (response.session) {
          resolve(response);
        } else {
          reject(new Error("Не удалось авторизоваться"));
        }
      }, perms);
    });
  },
  // Метод аутентификации //
  callApi(method, params) {
    params.v = params.v || "5.78";
    return new Promise((resolve, reject) => {
      VK.api(method, params, (response) => {
        if (response.error) {
          reject(new Error(response.error.error));
        } else {
          resolve(response.response);
        }
      });
    });
  }, // Метод вызвает удаленный метод из VK //
  getUser(params = {}) {
    return this.callApi("users.get", params);
  }, // Метод  //
};

// callApi('friends.get', {fields: 'city,country' })
