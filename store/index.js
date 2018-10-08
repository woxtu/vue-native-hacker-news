import Vuex from 'vuex'
import feed from './feed'
import item from './item'

const state = {
  isLoading: false,
  error: null,
}

const mutations = {
  startLoading (state) {
    state.isLoading = true
  },
  stopLoading (state) {
    state.isLoading = false
  },
  setError (state, { error }) {
    state.error = error
  },
}

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    feed,
    item,
  },
})
