import { axiosInstance } from './api';

export class AuthService {
    static async getClasses() {
        const { data } = await axiosInstance.get('classes');
        return data;
    }
}