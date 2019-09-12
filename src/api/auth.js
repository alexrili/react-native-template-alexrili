import request from 'utils/request'

export default {
  loginByUsernameAndPassoword({ username, password }) {

    return request({
      url: '/api/login',
      method: 'post',
      data: { email: username, password }
    })

  },

  logout() {
    return;
  }
}
