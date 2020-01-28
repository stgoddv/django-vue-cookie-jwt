import { api, plainApi } from "@/services/backend";

export default {
  login({ dispatch }, { username, password }) {
    return new Promise((resolve, reject) => {
      plainApi
        .post("api/token/", {
          username,
          password
        })
        .then(() => {
          dispatch("fetchActiveUser")
            .then(response => resolve(response))
            .catch(error => reject(error));
        })
        .catch(error => reject(error));
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .post("api/token/delete/")
        .then(response => {
          commit("REMOVE_ACTIVE_USER");
          resolve(response);
        })
        .catch(error => reject(error));
    });
  },
  register({ dispatch }, { username, email, password }) {
    return new Promise((resolve, reject) => {
      api
        .post("auth/users/", {
          username,
          email,
          password
        })
        .then(() => {
          dispatch("login", {
            username,
            password
          })
            .then(response => resolve(response))
            .catch(error => reject(error));
        })
        .catch(error => reject(error));
    });
  },
  fetchActiveUser({ commit }, noRedirect = false) {
    return new Promise((resolve, reject) => {
      api
        .get(`auth/users/me${noRedirect ? "?noRedirect" : ""}`)
        .then(response => {
          commit("SET_ACTIVE_USER", response.data);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }
};
