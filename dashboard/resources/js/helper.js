import axios from "axios";

// Axios GET request
export const fetchData = async (url) => {
    const res = await axios.get(url);
    return res.data;
}

// Return street address from Mapbox Geocoding Address string
export const getStreetAddress = (string) => string.substr(0, string.indexOf(','));

export const toggleVisibility = (element) => {
    element.classList.remove('hidden');
    element.classLIst.add('show');
}
