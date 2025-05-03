import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // atau sesuaikan port json-server kamu
});

// Fungsi untuk mengambil semua paket
export const getPackages = () => api.get('/packages');

// Fungsi untuk mengambil paket berdasarkan ID
export const getPackageById = (id) => api.get(`/packages/${id}`);

// Fungsi untuk mengambil data providers
export const getProviders = () => api.get('/providers');

// Fungsi untuk mengambil data add-ons
export const getAddOns = () => api.get('/addons');

// Fungsi untuk mengambil metode pembayaran
export const getPaymentMethods = () => api.get('/paymentMethods');
