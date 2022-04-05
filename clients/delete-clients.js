import { clientAPI } from './client-api.js'

const tabela = document.querySelector('[data-tabela]')
tabela.onclick = evento => {
  try {
    const botaoDeExcluirClicado = evento.target.className.includes('botao-simples--excluir')
    const linhaCliente = evento.target.closest('[data-id]')
    const id = linhaCliente.dataset.id
    if (botaoDeExcluirClicado) {
      linhaCliente.remove()
      clientAPI.deleteClientProfile(id)
    }
  } catch (e) {
    console.log(e)
  }
}
