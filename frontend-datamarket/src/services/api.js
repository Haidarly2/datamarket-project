import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // atau sesuaikan port json-server kamu
});

export const getPackages = () => api.get('/packages');
export const getProviders = () => api.get('/providers');
export const getAddOns = () => api.get('/addons');
export const getPaymentMethods = () => api.get('/paymentMethods');
