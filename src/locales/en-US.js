export default {
  app: { name: 'app' },
  loading: { text: 'Aguarde...' },
  auth: {
    register: {
      title: 'Inscreva-se',
      goBackLink: 'Voltar',
      form: {
        name: 'Nome completo',
        username: 'E-mail',
        password: 'Senha',
        button: 'Criar conta'
      }
    },
    login: {
      registerLink: 'CADASTRAR',
      forgotPasswordLink: 'Esqueceu sua senha?',
      form: {
        username: 'E-mail',
        password: 'Senha',
        button: 'Entrar'
      }
    },

    error: {
      'empty-email': 'Email não pode ser em branco',
      'user-not-found': 'Usuário não cadastrado.',
      'email-already-in-use': 'Este email já está em uso.',
      'invalid-email': 'Esse email não é válido',
      'invalid-email-and-password': 'Email / Password são inválidos',
      'weak-password': 'Sua senha não pode ter menos que 6 caractéres',
      'empty-password': 'Campo senha precisa ser preenchido.',
      'wrong-password': 'Sua senha não está correta.',
      'empty-name': 'Nome não pode ser em branco',
    }
  }
};