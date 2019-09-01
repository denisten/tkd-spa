import axios from 'axios';

export default class Service {
    static async authorize(login, password) {
        try {
            return await axios.post('http://localhost:5000/login', {login, password});
        } catch (error) {
            throw new Error('Wrong password/login')
        }
    }
    static async registration(login, password, email, mobilePhone) {
        try {
            return await axios.post('http://localhost:5000/registration', {login, password, email, mobilePhone});
        } catch (error) {
            throw new Error('Username is reserved')
        }
    }
}