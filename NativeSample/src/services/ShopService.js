import { axiosInstance } from './api';

import { encodeParams } from '~/helpers'; 

export class ShopService {
    static async getItems(query) {
        const { data } = await axiosInstance.get(`items?${encodeParams(query)}`);
        return data;
    }

    static async purchaseItem(id, item) {
        await axiosInstance.post(`characters/${id}/items/${item}`);
    }
}