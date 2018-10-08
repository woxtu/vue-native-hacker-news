import { fetchItem, fetchItems } from '../api'

const itemsPerPage = 20

const state = {
  items: {},
}

const getters = {
  itemById ({ items }) {
    return (id) => items[id] || {}
  },
  subitemsById ({ items }) {
    return (id) => items[id] && items[id].subitems || []
  },
  currentPageById ({ items }) {
    return (id) => Math.floor(items[id].subitems.length / itemsPerPage)
  },
}

const mutations = {
  setItem (state, { id, item }) {
    item.kids = item.kids || []
    item.subitems = []

    state.items = { ...state.items, [id]: item }
  },
  addSubitems (state, { id, subitems }) {
    const item = state.items[id]
    item.subitems = item.subitems.concat(subitems)

    state.items = { ...state.items, [id]: item }
  },
}

const actions = {
  async fetchItem ({ commit, rootState: { isLoading } }, { id }) {
    if (isLoading) {
      return
    }

    commit('startLoading', null, { root: true })
    try {
      const item = await fetchItem(id)
      commit('setItem', { id, item })
      const subitems = await fetchItems(item.kids.slice(0, itemsPerPage))
      commit('addSubitems', { id, subitems })
    } catch (error) {
      commit('setError', { error }, { root: true })
    } finally {
      commit('stopLoading', null, { root: true })
    }
  },
  async fetchSubitems ({ commit, rootState: { isLoading }, getters: { itemById, subitemsById, currentPageById } }, { id }) {
    const item = itemById(id)
    const subitems = subitemsById(id)
    if (isLoading || item.kids.length <= subitems.length) {
      return
    }

    commit('startLoading', null, { root: true })
    try {
      const currentPage = currentPageById(id)
      const subitems = await fetchItems(item.kids.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage))
      commit('addSubitems', { id, subitems })
    } catch (error) {
      commit('setError', { error }, { root: true })
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
