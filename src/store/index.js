import { createStore } from 'vuex';

export default createStore({
  state: {
    calculated: 0,
    correct: 0,
    wrong: 0,
  },
  mutations: {
    UPDATE_CALCULATED(state) {
      state.calculated++;
    },
    UPDATE_CORRECT(state) {
      state.correct++;
    },
    UPDATE_WRONG(state) {
      state.wrong++;
    },
  },
  actions: {
    updateCalculated({ commit }) {
      commit('UPDATE_CALCULATED');
    },
    updateCorrect({ commit }) {
      commit('UPDATE_CORRECT');
    },
    updateWrong({ commit }) {
      commit('UPDATE_WRONG');
    },
  },
  modules: {},
});
