import { fetchFeed, fetchItems } from '../api'

const itemsPerPage = 20

const state = {
  feedTypes: ['Top', 'New', 'Show', 'Ask'],
  feedType: 'Top',
  feed: [],
  items: [],
}

const getters = {
  currentPage ({ items }) {
    return Math.floor(items.length / itemsPerPage)
  },
}

const mutations = {
  changeType (state, { type }) {
    state.feedType = type
    state.feed = []
    state.items = []
  },
  setFeed (state, { feed }) {
    state.feed = feed
  },
  addItems (state, { items }) {
    state.items = state.items.concat(items)
  },
}

const actions = {
  async fetchFeedItems ({ commit, rootState: { isLoading }, state: { feedType, feed, items }, getters: { currentPage } }) {
    if (isLoading || (0 < feed.length && feed.length <= items.length)) {
      return
    }

    commit('startLoading', null, { root: true })
    try {
      if (feed.length === 0) {
        feed = await fetchFeed(feedType.toLowerCase())
        commit('setFeed', { feed })
      }
      const items = await fetchItems(feed.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage))
      commit('addItems', { items })
    } catch (error) {
      commit('setError', { error }, { root:true })
    } finally {
      commit('stopLoading', null, { root: true })
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
