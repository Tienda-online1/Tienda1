import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/venta';

const user = localStorage.getItem('user');
const password = localStorage.getItem('pass');

const token = btoa(`${user}:${password}`);

const axiosInstance = axios.create({
    headers: {
        'Authorization': `Basic ${token}`
    }
});

export const getSales = async () => {
    try {
        const response = await axiosInstance.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching ventas:', error);
        throw error;
    }
};

export const saveVenta = async (venta) => {
    try {
        const response = await axiosInstance.post(API_URL, venta);
        return response.data;
    } catch (error) {
        console.error('Error guardando la venta:', error);
        throw error;
    }
};
