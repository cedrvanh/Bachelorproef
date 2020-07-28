import { axiosInstance } from './api';

export class HeroService {
    static async getCharacterClasses() {
        const { data } = await axiosInstance.get('classes');
        return data;
    }
}