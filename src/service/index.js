import axios from 'axios';

export default class Service {
    async authorize(login, password) {
        try {
            return await axios.post('http://localhost:5000/auth', {login, password});
        } catch (error) {
            throw new Error('Wrong password/login')
        }
    }
}