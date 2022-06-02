export default {
  //mutations must be synchronous. You can not put asynch code here. That leads to errors.
  //to put asynch events, you should use actions which, in turn, commit mutations.
  //It is considered good practice to put Actions between components and mutations.

  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
};
