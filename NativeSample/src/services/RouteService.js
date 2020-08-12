import { axiosInstance, handleError } from './api';
import { AsyncStorage } from 'react-native';

export class RouteService {
    static async getRoutes() {
        const { data } = await axiosInstance.get('routes');
        return data;
    }

    static async getRouteById(id) {
        const { data } = await axiosInstance.get(`routes/${id}`);
        return data;
    }
    
    static async startRoute(currentRoute, index) {
        try {
            await AsyncStorage.setItem('onRoute', JSON.stringify({
                status: true,
                currentRoute: currentRoute,
                currentIndex: index,
            }));
        } catch (err) {
            handleError(err);
        }
    };

    static async saveRoute(route) {
        try {
            await AsyncStorage.setItem('onRoute', JSON.stringify(route));
        } catch (err) {
            handleError(err);
        }
    }

    static async cancelRoute() {
        try {
            await AsyncStorage.removeItem('onRoute');
        } catch (err) {
            handleError(err);
        }
    }
    
    static async checkRouteStatus () {
        let status = await AsyncStorage.getItem('onRoute');
        return JSON.parse(status);
    }
}