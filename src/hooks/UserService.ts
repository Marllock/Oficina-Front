import axios from 'axios';

export default class UserServices {
  axios: any;
  constructor () {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN + '/api'
    })
  }

  async login (dados: never[]) {
    return {
      user: {name: 'Marcello', email: 'marcello@gmail.com' },
            token: '123456789'
    }
    const {data} = await this.axios.post('/login', dados)

    if (data) {
      localStorage.setItem("nome", data.user.nome)
      localStorage.setItem("email", data.user.email)
      localStorage.setItem("token", data.token.token)

      return true
    }

    return
  }

  async cadastrar (dados: any) {
    return this.axios.post('/user', dados)
  }

  usuarioAutenticado () {
    return localStorage.getItem("token") != undefined ? true : false
    // return typeof localStorage.getItem("token")
  }

  async logout () {
    localStorage.removeItem("token")
    localStorage.removeItem("nome")
    localStorage.removeItem("email")
  }
}