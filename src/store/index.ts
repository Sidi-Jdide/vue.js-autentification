import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    token: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
    }
  },
  actions: {
    login({ commit }, { user, token }) {
      commit('SET_USER', user);
      commit('SET_TOKEN', token);
      localStorage.setItem('token', token);
    },
    logout({ commit }) {
      commit('LOGOUT');
      localStorage.removeItem('token');
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    currentUser: state => state.user
  }
})
