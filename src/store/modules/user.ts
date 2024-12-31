import { Commit } from 'vuex'
import { fetchLoginUser } from '@/utils/user'

const state = {
  username: '未登录',
}

const mutations = {
  SET_LOGIN_USER: (state: { [key: string]: string }, username: string) => {
    state.username = username
  },
}

const actions = {
  async setLoginUser({ commit }: { commit: Commit }) {
    const username = await fetchLoginUser()
    if (username) {
      commit('SET_LOGIN_USER', username)
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
