import { clientAPI } from './client-api.js'

const formulario = document.querySelector('[data-form]')
formulario.onsubmit = evento => {
  evento.preventDefault()
  const nome = evento.target.querySelector('[data-nome]').value
  const email = evento.target.querySelector('[data-email]').value
  clientAPI.createNewClientProfile(nome, email).then((window.location.href = '../telas/cadastro_concluido.html'))
}
