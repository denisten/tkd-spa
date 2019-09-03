import axios from 'axios';

export default class Service {
    static async authorize(data) {
        try {
            const {login, password} = data;
            return await axios.post('http://localhost:5000/login', {login, password});
        } catch (error) {
            throw new Error('Wrong password/login')
        }
    }
    static async registration(data) {
        try {
            const {loginValue, passwordValue, mobilePhone, emailValue} = data;
            return await axios.post('http://localhost:5000/registration', {
                login: loginValue,
                password: passwordValue,
                mobilePhone,
                email: emailValue
            });
        } catch (error) {
            throw new Error('Username is reserved')
        }
    }
    static async checkToken(data) {
        try {
            const {token} = data;
            return await axios.post('http://localhost:5000/checkToken', {
                token
            });
        } catch (error) {
            throw new Error('Wrong token')
        }
    }
}