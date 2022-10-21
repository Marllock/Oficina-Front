import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {id:52, name:'Marcello', email:'marcello@gmail.com'},
        };
        const response = await api.post('/validate', {token});
        return response.data;
    },
    sigin: async (email:string, password:string) => {
        return {
         user: {id:52, name:'Marcello', email:'marcello@gmail.com'},
         token: '182365218'
        };
        //Trocar quando endpoint estiver pronto
       const response = await api.post('/sigin', {email, password});
       return response.data;
    },
    logout: async () => {
        return {status : true};
        const response = await api.post('/logout');
        return response.data;
    }
});
