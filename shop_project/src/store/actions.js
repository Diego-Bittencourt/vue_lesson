export default {
  //You don't need to use the same name in actions or mutations, but it is good to do it.

  login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  },
};
