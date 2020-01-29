export default {
  SET_ACTIVE_USER(state, payload) {
    state.activeUser = payload;
    state.signIn = true;
    localStorage.setItem("signIn", true);
  },
  REMOVE_ACTIVE_USER(state) {
    state.activeUser = null;
    state.signIn = null;
    localStorage.removeItem("signIn");
  }
};
