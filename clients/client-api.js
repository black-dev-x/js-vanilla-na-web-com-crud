const serverAddress = 'http://localhost:3000'

const loadClientProfiles = () => {
  return fetch(`${serverAddress}/profile`).then(resposta => resposta.json())
}

const getClientDetails = id => {
  return fetch(`${serverAddress}/profile/${id}`).then(resposta => resposta.json())
}
const createNewClientProfile = (nome, email) => {
  return fetch(`${serverAddress}/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome,
      email
    })
  }).then(resposta => resposta.body)
}

const updateClient = profile => {
  return fetch(`${serverAddress}/profile/${profile.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)
  }).then(resposta => resposta.json())
}

const deleteClientProfile = id => {
  return fetch(`${serverAddress}/profile/${id}`, {
    method: 'DELETE'
  })
}
export const clientAPI = {
  loadClientProfiles,
  createNewClientProfile,
  deleteClientProfile,
  getClientDetails,
  updateClient
}
