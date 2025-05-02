import React from 'react';
import {
    Box,
    Typography,
    Divider,
    Button,
} from '@mui/material';
import NavbarTransaction from "../components/NavbarTransaction";
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../context/CheckoutContext'; // Pastikan path ini sesuai
import { usePayment } from '../context/PaymentContext';   // Pastikan path ini sesuai

const ConfirmationPage = () => {
    const navigate = useNavigate();
    const {
        phoneNumber,
        selectedAddOns,
        mainPackage // ✅ ambil dari context
    } = useCheckout();
    const { paymentPhoneNumber, selectedMethod } = usePayment();

    // ✅ Fungsi untuk membersihkan harga dari string "Rp xx.xxx.xxx"
    const getCleanPrice = (priceString) => {
        if (typeof priceString === 'number') return priceString;
        return Number(priceString.replace(/[^\d]/g, '')) || 0;
    };

    // ✅ Total dihitung dari mainPackage + add-ons
    const calculateTotal = () => {
        const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + getCleanPrice(addOn.harga), 0);
        const mainPrice = mainPackage ? getCleanPrice(mainPackage.price) : 0;
        return mainPrice + addOnsTotal;
    };

    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
            <NavbarTransaction
                title="Konfirmasi Pembelian"
                onBack={() => navigate(-1)}
            />

            <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6, px: 4 }}>
                <Typography fontWeight={600} fontSize="16px" mb={2}>
                    Ringkasan
                </Typography>
                <Divider sx={{ mb: 2 }} />

                {/* Paket Utama */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>{mainPackage?.name || '-'}</Typography>
                    <Typography fontWeight={500}>
                        Rp {mainPackage ? getCleanPrice(mainPackage.price).toLocaleString() : '-'}
                    </Typography>
                </Box>

                {/* Add-ons */}
                {selectedAddOns.length > 0 && (
                    <>
                        <Typography sx={{ mt: 2 }}>Add-ons</Typography>
                        {selectedAddOns.map((addOn, index) => (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography>{addOn.name}</Typography>
                                <Typography fontWeight={500}>
                                    Rp {getCleanPrice(addOn.harga).toLocaleString()}
                                </Typography>
                            </Box>
                        ))}
                    </>
                )}

                {/* Metode Bayar */}
                <Typography sx={{ mt: 3 }}>Metode Bayar</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography fontWeight={600}>{selectedMethod || '-'}</Typography>
                    <Typography>{paymentPhoneNumber || '-'}</Typography>
                </Box>

                {/* Total */}
                <Divider sx={{ mt: 2, mb: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography fontWeight={600}>Total</Typography>
                    <Typography fontWeight={600}>
                        Rp {calculateTotal().toLocaleString()}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ px: 3, mt: 6, mb: 3 }}>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        bgcolor: '#0B63E5',
                        color: '#fff',
                        borderRadius: 999,
                        py: 1.5,
                        fontWeight: 600,
                        fontSize: '16px',
                        textTransform: 'none',
                    }}
                >
                    Bayar
                </Button>
            </Box>
        </Box>
    );
};

export default ConfirmationPage;