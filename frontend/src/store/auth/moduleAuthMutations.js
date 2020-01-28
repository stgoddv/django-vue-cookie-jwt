export default {
  SET_ACTIVE_USER(state, payload) {
    state.activeUser = payload;
  },
  REMOVE_ACTIVE_USER(state) {
    state.activeUser = null;
  }
};
