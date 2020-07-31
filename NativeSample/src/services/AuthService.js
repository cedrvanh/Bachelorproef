import { AsyncStorage } from 'react-native';

import { axiosInstance, setAuthHeader, handleError } from './api';

export class AuthService {
    static async signIn(payload) {
        const { data } = await axiosInstance.post('auth/signin', payload);
        this.setToken(data.token);
    }

    static async signUp(payload) {
        await axiosInstance.post('auth/signup', payload);
    }

    static async getAccount() {
        await axiosInstance.get('auth/account');
    }

    static async getToken() {
        try {
            await AsyncStorage.getItem('token');
        } catch (error) {
            console.log(`AsyncStorage error: ${error.message}`);
        }
    }
    
    static async setToken(token) {
        try {
            await AsyncStorage.setItem('token', token); 
            await setAuthHeader(token);
            console.log('Setting token');
        } catch (error) {
            console.log(`AsyncStorage error: ${error.message}`);
        }
    }
}