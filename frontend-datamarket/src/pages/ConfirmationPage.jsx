import React from 'react';
import {
    Box,
    Typography,
    Divider,
    Button,
    Card,
    CardContent,
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

                <Card sx={{ mt: 6, borderRadius: 4, boxShadow: 2, maxWidth: 600, mx: 'auto' }}>
                    <CardContent sx={{ px: 4, py: 4 }}>
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                            Ringkasan Pembayaran
                        </Typography>
                        <Divider sx={{ mb: 3 }} />

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
                                <Typography fontWeight={600} mt={3} mb={1}>
                                    Add-ons
                                </Typography>
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

                        {/* Metode Pembayaran */}
                        <Typography fontWeight={600} mt={4} mb={1}>
                            Metode Pembayaran
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography fontWeight={500}>{selectedMethod || '-'}</Typography>
                            <Typography variant="body2">{paymentPhoneNumber || '-'}</Typography>
                        </Box>

                        <Divider sx={{ mt: 4, mb: 2 }} />

                        {/* Total */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                            <Typography fontWeight={700}>Total</Typography>
                            <Typography fontWeight={700}>
                                Rp {calculateTotal().toLocaleString()}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            {/* Tombol Bayar */}
            <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{
                    borderRadius: 999,
                    fontWeight: 600,
                    boxShadow: 3,
                    position: 'fixed',
                    bottom: 16,
                    left: 0,
                    right: 0,
                    mx: 'auto',
                    maxWidth: 950,
                    zIndex: 1000,
                    transition: '0.3s',
                    '&:hover': {
                        boxShadow: 6,
                        transform: 'scale(1.01)',
                    },
                }}
                onClick={handleContinue}
            >
                Bayar Sekarang
            </Button>
        </Box>
    );
};

export default ConfirmationPage;

// import React from 'react';
// import {
//     Box,
//     Typography,
//     Divider,
//     Button,
// } from '@mui/material';
// import NavbarTransaction from "../components/NavbarTransaction";
// import { useNavigate } from 'react-router-dom';
// import { useCheckout } from '../context/CheckoutContext';
// import { usePayment } from '../context/PaymentContext';

// const ConfirmationPage = () => {
//     const navigate = useNavigate();
//     const {
//         selectedAddOns,
//         mainPackage
//     } = useCheckout();
//     const { paymentPhoneNumber, selectedMethod } = usePayment();

//     const getCleanPrice = (priceString) => {
//         if (typeof priceString === 'number') return priceString;
//         return Number(priceString.replace(/[^\d]/g, '')) || 0;
//     };

//     const calculateTotal = () => {
//         const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + getCleanPrice(addOn.harga), 0);
//         const mainPrice = mainPackage ? getCleanPrice(mainPackage.price) : 0;
//         return mainPrice + addOnsTotal;
//     };

//     const handleContinue = () => {
//         navigate('/success');
//     }

//     return (
//         <Box bgcolor={"#EFF3FA"} minHeight="100vh" width="100%">
//             <Box sx={{ p: 2, maxWidth: 950, mx: "auto", pb: 10 }}>
//                 <NavbarTransaction
//                     title="Konfirmasi Pembelian"
//                     onBack={() => navigate(-1)}
//                 />

//                 <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6, px: 4 }}>
//                     <Typography fontWeight={600} fontSize="16px" mb={2}>
//                         Ringkasan
//                     </Typography>
//                     <Divider sx={{ mb: 2 }} />

//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                         <Typography>{mainPackage?.name || '-'}</Typography>
//                         <Typography fontWeight={500}>
//                             Rp {mainPackage ? getCleanPrice(mainPackage.price).toLocaleString() : '-'}
//                         </Typography>
//                     </Box>

//                     {selectedAddOns.length > 0 && (
//                         <>
//                             <Typography sx={{ mt: 2 }}>Add-ons</Typography>
//                             {selectedAddOns.map((addOn, index) => (
//                                 <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                                     <Typography>{addOn.name}</Typography>
//                                     <Typography fontWeight={500}>
//                                         Rp {getCleanPrice(addOn.harga).toLocaleString()}
//                                     </Typography>
//                                 </Box>
//                             ))}
//                         </>
//                     )}

//                     <Typography sx={{ mt: 3 }}>Metode Bayar</Typography>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                         <Typography fontWeight={600}>{selectedMethod || '-'}</Typography>
//                         <Typography>{paymentPhoneNumber || '-'}</Typography>
//                     </Box>

//                     <Divider sx={{ mt: 2, mb: 1 }} />
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
//                         <Typography fontWeight={600}>Total</Typography>
//                         <Typography fontWeight={600}>
//                             Rp {calculateTotal().toLocaleString()}
//                         </Typography>
//                     </Box>
//                 </Box>
//             </Box>
//             <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 size="large"
//                 sx={{
//                     borderRadius: 999,
//                     position: 'fixed',
//                     bottom: 16,
//                     left: 0,
//                     right: 0,
//                     mx: 'auto',
//                     maxWidth: 950,
//                     zIndex: 1000,
//                 }}
//                 onClick={handleContinue}
//             >
//                 Bayar
//             </Button>
//         </Box>
//     );
// };

// export default ConfirmationPage;