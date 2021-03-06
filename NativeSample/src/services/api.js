import { AsyncStorage } from 'react-native';
import axios from 'axios';

// Default axios instance for HTTP Requests
export const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.233:8000/api/v1/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 2000,
})

// Logging purposes
axiosInstance.interceptors.request.use(request => {
    console.log('Request: ', request);
    return request;
});

// Logging purposes
axiosInstance.interceptors.response.use(response => {
    console.log('Response: ', response);
    return response;
});

// Set authorization token between requests
axiosInstance.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');
    if(token && token !== null) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export const setAuthHeader = (token) => {
    if(token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        axiosInstance.defaults.headers.common['Authorization'] = ``;
    }
}

export const handleError = (error) => {
    if (error.response) {
        console.log(error.response.data);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log(error.message);
    }
}