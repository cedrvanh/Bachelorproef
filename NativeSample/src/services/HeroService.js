import { axiosInstance } from './api';

import { encodeParams } from '~/helpers'; 

export class HeroService {
    static async getCharacterClasses() {
        const { data } = await axiosInstance.get('classes');
        return data;
    }

    static async getCharacterClassById(id) {
        const { data } = await axiosInstance.get(`classes/${id}`);
        return data;
    }

    static async getCharacters(query) {
        const { data } = await axiosInstance.get(`characters?${encodeParams(query)}`);
        return data;
    }

    static async createCharacter(payload) {
        await axiosInstance.post(`characters`, payload);
    }

    static async updateCharacter(id, payload) {
        await axiosInstance.put(`characters/${id}`, payload);
    }

    static async getInventory(id) {
        const { data } = await axiosInstance.get(`characters/${id}/items`);
        return data;
    }
}