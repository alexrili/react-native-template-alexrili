import request from 'utils/request'

export default {
  loginByUsernameAndPassoword(credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000)
    })
  },

  logout() {
    return;
  }
}
