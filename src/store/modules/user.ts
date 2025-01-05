import { Commit } from 'vuex'
import { fetchLoginUser } from '@/utils/user'

const state = {
  username: '未登录',
}

const mutations = {
  SET_LOGIN_USER: (
    state: { [key: string]: string },
    loginUser: { [key: string]: string }
  ) => {
    Object.assign(state, loginUser)
  },
}

const actions = {
  async setLoginUser({ commit }: { commit: Commit }) {
    const loginUser = await fetchLoginUser()
    if (loginUser) {
      commit('SET_LOGIN_USER', loginUser)
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
