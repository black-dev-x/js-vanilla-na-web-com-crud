const serverAddress = 'http://localhost:3000'

const loadClientProfiles = () => {
  fetch(`${serverAddress}/profile`)
    .then(resposta => resposta.json())
    .then(profiles => appendToTable(profiles))
}

const appendToTable = profiles => {
  const table = document.querySelector('[data-tabela]')
  profiles.forEach(profile => {
    const tableRow = newTableRow(profile.nome, profile.email)
    table.appendChild(tableRow)
  })
}
const newTableRow = (nome, email) => {
  const tableRow = document.createElement('tr')
  tableRow.innerHTML = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li>
                <a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a>
            </li>
            <li>
                <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
            </li>
        </ul>
    </td>`
  return tableRow
}

loadClientProfiles()
