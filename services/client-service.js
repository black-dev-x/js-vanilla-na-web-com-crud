const httpRequest = new XMLHttpRequest()
const serverAddress = 'http://localhost:3000'

httpRequest.open('GET', `${serverAddress}/profile`)
httpRequest.send()
httpRequest.onload = () => console.log(httpRequest.response)
