import axios from "axios";

// Axios GET request
export const fetchData = async (url) => {
    const res = await axios.get(url);
    return res.data;
}

// Return street address from Mapbox Geocoding Address string
export const getStreetAddress = (string) => string.substr(0, string.indexOf(','));

// export const getStreetAddress = (string) => {
//     // string.substr(0, string.indexOf(','));
//     let index = string.indexOf(',', string.indexOf(',') + 1);
//     return string.slice(0, index);
// }

export const toggleVisibility = (element) => {
    element.classList.remove('hidden');
    element.classLIst.add('show');
}