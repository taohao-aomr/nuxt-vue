import { defineStore } from 'pinia'
import { reactive } from 'vue'
interface USER_INFO {
  userName: String,
  id: Number,
  sex: String
}

const USER_INFO: USER_INFO = {
  userName: '浩师傅',
  id: 1,
  sex: '男',
}

const useUserStore = defineStore('userInfo', () => {

  const userInfo = reactive<USER_INFO>(USER_INFO)

  return {
    userInfo,
  }
})

export default useUserStore