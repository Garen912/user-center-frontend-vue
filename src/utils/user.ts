import { getCurrentUser } from '@/api/user'

// 远程获取登录用户信息
async function fetchLoginUser() {
  const res = await getCurrentUser()
  if (res.data.code === 0 && res.data.data) {
    return res.data.data
  }
  return null
}

export { fetchLoginUser }
