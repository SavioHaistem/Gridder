import { defineStore } from 'pinia';

interface Iuser {
  userName: String
}

export const useLoginStore = defineStore('Login', {
  state: () => ({
    user: {
      userName: "",
    } as Iuser
  }),
  getters: {
    getUser: (state) => state.user,
    getUserName: (state) => state.user.userName
  },
  actions: {
    setUser(user: Iuser) {
      this.user = user
    }
  },
});