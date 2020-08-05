import { useState, useEffect } from 'react';

import Geolocation from '@react-native-community/geolocation';

const PERMISSION_DENIED = 1;
const POSITION_UNAVAILBLE = 2;
const TIMEOUT = 3;

export default usePosition = () => {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);

    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
        distanceFilter: 1, // Minimum distance before location update
    }
    
    const onChange = async ({ coords }) => {
        await setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            heading: coords.heading, // User facing direction,
            speed: coords.speed // Velocity of device (m/s)
        });
    };

    // Catch Geolocation errors by status code
    const onError = (error) => {
        switch (error.code) {
             // Permission request has been denied
            case PERMISSION_DENIED:
                setError(error.message);
                break;
            // Location service of device is turned off
            case POSITION_UNAVAILBLE:
                setError(error.message);
                break;
             // Timeout when fetching for location
            case TIMEOUT:
                setError(error.message);
                break;
            default:
                return;
        }
    }


    useEffect(() => {
        if(!Geolocation) {
            setError('Geolocation API is not available');
            return;
        };
        
        watcher = Geolocation.watchPosition(onChange, onError, options);
        
        return () => watcher && Geolocation.clearWatch(watcher);
    }, [
        options.enableHighAccuracy,
        options.timeout,
        options.maximumAge
    ]);


    return {
        position,
        error
    }
}