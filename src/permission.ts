import router from '@/router'
import store from '@/store'
import { message } from 'ant-design-vue'

/**
 * 全局权限校验
 */
router.beforeEach(async (to, from, next) => {
  const loginUser = store.state.user
  const toUrl = to.fullPath
  if (toUrl.startsWith('/admin')) {
    if (!loginUser || loginUser.userRole !== 1) {
      message.error('没有权限')
      next(`/user/login?redirect=${to.fullPath}`)
      return
    }
  }
  next()
})
