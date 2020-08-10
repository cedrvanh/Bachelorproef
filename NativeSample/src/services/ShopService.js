import { axiosInstance } from './api';

export class ShopService {
    static async getItems() {
        const { data } = await axiosInstance.get('items');
        return data;
    }
}