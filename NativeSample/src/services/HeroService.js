import { axiosInstance } from './api';

export class HeroService {
    static async getCharacterClasses() {
        const { data } = await axiosInstance.get('classes');
        return data;
    }

    static async getCharacterClassById(id) {
        const { data } = await axiosInstance.get(`classes/${id}`);
        return data;
    }

    static async createCharacter(payload) {
        await axiosInstance.post(`characters`, payload);
    }

    static async updateCharacter(id, payload) {
        await axiosInstance.post(`characters/${id}`, payload);
    }
}