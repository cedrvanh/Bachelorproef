import { axiosInstance } from './api';

export class RouteService {
    static async getRoutes() {
        const { data } = await axiosInstance.get('routes');
        return data;
    }
}