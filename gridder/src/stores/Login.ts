import { defineStore } from 'pinia';

export interface iLogin {
  userName: String
}
export const useLoginStore = defineStore('Login', {
  state: () => ({
    user: {
      userName: "",
    } as iLogin
  }),
  getters: {
    getUser: (state) => state.user,
    getUserName: (state) => state.user.userName
  },
  actions: {
    setUser(user: iLogin) {
      this.user = user
    }
  },
});