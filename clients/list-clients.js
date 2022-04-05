import { clientAPI } from './client-api.js'
import { clientDOM } from './client-dom-manipulation.js'

const applicationStart = () => {
  clientAPI.loadClientProfiles().then(profiles => appendToTable(profiles))
}

const appendToTable = profiles => {
  profiles.forEach(profile => clientDOM.insertProfile(profile))
}

applicationStart()
