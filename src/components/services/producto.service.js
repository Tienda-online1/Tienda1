import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/producto'; // Reemplaza con la URL de tu backend

const user = localStorage.getItem('user');
const password = localStorage.getItem('pass');

const token = btoa(`${user}:${password}`);

const axiosInstance = axios.create({
    headers: {
        'Authorization': `Basic ${token}`
    }
});

export const getAvalaibleProducts = async () => {
    try {
        const response = await axiosInstance.get(`${API_URL}/available`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axiosInstance.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};

export const UpdateProduct = async (id, producto) => {
    try {
        const response = await axiosInstance.put(`${API_URL}/${id}`, producto);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

export const saveProduct = async (producto) => {
    try {
        const response = await axiosInstance.post(API_URL, producto);
        return response.data;
    } catch (error) {
        console.error('Error guardando el producto:', error);
        throw error;
    }
};
