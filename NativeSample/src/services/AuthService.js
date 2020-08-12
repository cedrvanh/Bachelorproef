import { AsyncStorage } from 'react-native';

import { axiosInstance, setAuthHeader, handleError } from './api';

export class AuthService {
    static async signIn(payload) {
        const { data } = await axiosInstance.post('auth/signin', payload);
        this.setToken(data.token);
    }

    static async signUp(payload) {
        const { data } = await axiosInstance.post('auth/signup', payload);
        this.setToken(data.token);
        return data;
    }

    static async signOut() {
        await axiosInstance.post('auth/signout');
        await this.removeToken();
    }

    static async getAccount() {
        const { data } = await axiosInstance.get('auth/account');
        return data;
    }

    static async getToken() {
        try {
            return await AsyncStorage.getItem('token');
        } catch (error) {
            console.log(`AsyncStorage error: ${error.message}`);
        }
    }

    static async setToken(token) {
        try {
            await AsyncStorage.setItem('token', token); 
            await setAuthHeader(token);
        } catch (error) {
            console.log(`AsyncStorage error: ${error.message}`);
        }
    }

    static async removeToken() {
        try {
            await AsyncStorage.removeItem('token'); 
            await setAuthHeader();
        } catch (error) {
            console.log(`AsyncStorage error: ${error.message}`);
        }
    }
}