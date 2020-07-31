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