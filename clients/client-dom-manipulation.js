const appendToTable = profile => {
  const table = document.querySelector('[data-tabela]')
  const tableRow = newTableRow(profile, profile)
  table.appendChild(tableRow)
}

const newTableRow = profile => {
  const tableRow = document.createElement('tr')
  tableRow.innerHTML = `
      <td class="td" data-td>${profile.nome}</td>
      <td>${profile.email}</td>
      <td>
          <ul class="tabela__botoes-controle">
              <li>
                  <a href="../telas/edita_cliente.html?id=${profile.id}" class="botao-simples botao-simples--editar">Editar</a>
              </li>
              <li>
                  <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
              </li>
          </ul>
      </td>`
  tableRow.dataset.id = profile.id
  return tableRow
}

export const clientDOM = {
  insertProfile: appendToTable
}
