import React from 'react';
import {
    Box,
    Typography,
    Divider,
    Button,
} from '@mui/material';
import NavbarTransaction from "../components/NavbarTransaction";
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../context/CheckoutContext';
import { usePayment } from '../context/PaymentContext';

const ConfirmationPage = () => {
    const navigate = useNavigate();
    const {
        selectedAddOns,
        mainPackage
    } = useCheckout();
    const { paymentPhoneNumber, selectedMethod } = usePayment();

    const getCleanPrice = (priceString) => {
        if (typeof priceString === 'number') return priceString;
        return Number(priceString.replace(/[^\d]/g, '')) || 0;
    };

    const calculateTotal = () => {
        const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + getCleanPrice(addOn.harga), 0);
        const mainPrice = mainPackage ? getCleanPrice(mainPackage.price) : 0;
        return mainPrice + addOnsTotal;
    };

    const handleContinue = () => {
        navigate('/success');
    }

    return (
        <Box bgcolor={"#EFF3FA"} minHeight="100vh" width="100%">
            <Box sx={{ p: 2, maxWidth: 950, mx: "auto", pb: 10 }}>
                <NavbarTransaction
                    title="Konfirmasi Pembelian"
                    onBack={() => navigate(-1)}
                />

                <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6, px: 4 }}>
                    <Typography fontWeight={600} fontSize="16px" mb={2}>
                        Ringkasan
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography>{mainPackage?.name || '-'}</Typography>
                        <Typography fontWeight={500}>
                            Rp {mainPackage ? getCleanPrice(mainPackage.price).toLocaleString() : '-'}
                        </Typography>
                    </Box>

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

                    <Typography sx={{ mt: 3 }}>Metode Bayar</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography fontWeight={600}>{selectedMethod || '-'}</Typography>
                        <Typography>{paymentPhoneNumber || '-'}</Typography>
                    </Box>

                    <Divider sx={{ mt: 2, mb: 1 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                        <Typography fontWeight={600}>Total</Typography>
                        <Typography fontWeight={600}>
                            Rp {calculateTotal().toLocaleString()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{
                    borderRadius: 999,
                    position: 'fixed',
                    bottom: 16,
                    left: 0,
                    right: 0,
                    mx: 'auto',
                    maxWidth: 950,
                    zIndex: 1000,
                }}
                onClick={handleContinue}
            >
                Bayar
            </Button>
        </Box>
    );
};

export default ConfirmationPage;