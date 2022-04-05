import { clientAPI } from './client-api.js'
const url = new URL(window.location)
const id = url.searchParams.get('id')
const formulario = document.querySelector('[data-form]')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')

const loadProfile = profile => {
  inputNome.value = profile.nome
  inputEmail.value = profile.email
}

formulario.onsubmit = e => {
  e.preventDefault()
  const newClient = { id, nome: inputNome.value, email: inputEmail.value }
  clientAPI.updateClient(newClient).then(() => (window.location.href = '../telas/edicao_concluida.html'))
}
clientAPI.getClientDetails(id).then(loadProfile)
