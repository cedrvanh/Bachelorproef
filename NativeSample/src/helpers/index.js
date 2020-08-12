import * as moment from 'moment';
import 'moment-precise-range-plugin';

// Determines whether the object has the specified property
export const hasOwnProperty = (obj, prop) => {
    return Object.prototype.hasOwnProperty.call(obj, prop);
};

// Determines whether object is empty (empty array, empty object, ...)
export const isEmpty = (obj) => {
    for (const i in obj) {
        if (hasOwnProperty(obj, i) && obj[i]) {
            return false
        }
    };
    return true;
};

export const truncateString = (str, n) => {
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
}

export const encodeParams = (params) => Object.keys(params).map(key => key + '=' + params[key]).join('&');

export const dateDifference = (timestamp) => {
    let now = new Date().getTime();
    let duration = moment.duration(now.diff(timestamp));
    return duration.asDays();
}