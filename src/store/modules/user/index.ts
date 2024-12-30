import { getCurrentUser } from '@/api/user'
import { Commit } from 'vuex'
import User from './user'

// 远程获取登录用户信息
async function fetchLoginUser() {
  const res = await getCurrentUser()
  if (res.data.code === 0 && res.data.data) {
    return res.data.data
  }
  return null
}

const state = {
  username: '未登录',
}

const mutations = {
  SET_LOGIN_USER: (state: User, username: string) => {
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
  namespace: true,
  state,
  mutations,
  actions,
}
