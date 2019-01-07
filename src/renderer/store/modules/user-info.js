const state = {
  userInfo: null
}

const mutations = {
  USER_LOGIN: (state, userInfo) => state.userInfo = userInfo,
  USER_LOGOUT: state => state.userInfo = null,
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('USER_LOGIN')
  }
}

const getters = {
  userInfo: state => state.userInfo
}

export default {
  state,
  mutations,
  actions,
  getters,
}
