import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:1830/quizapp/api/'
})

export default instance