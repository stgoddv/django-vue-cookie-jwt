export default {
  activeUser: null,

  /* Only used to know when to try to login with a fresh start */
  signIn: localStorage.getItem("signIn") == "true"
};
