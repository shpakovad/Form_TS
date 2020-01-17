import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth',
    withCredentials: true,
    headers: { 'API-KEY': '628af683-774f-4561-a001-bea25c0b62fc' }
});

export const auth = {
    register(email: string, password: number) {
        return instance.post('/register', { email, password })
    }
}
