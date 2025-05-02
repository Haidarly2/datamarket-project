import React, { useState } from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
    Button,
    TextField,
    Collapse,
} from '@mui/material';
import {
    ArrowRight2,
    ArrowDown2,
} from 'iconsax-reactjs';
import NavbarTransaction from "../components/NavbarTransaction";
import { usePayment } from "../context/PaymentContext";
import { useNavigate } from 'react-router-dom';

const paymentMethods = [
    { name: 'Gopay', logo: './finances/gopay.png' },
    { name: 'Dana', logo: './finances/dana.png' },
    { name: 'ShopeePay', logo: './finances/shoopepay.png' },
    { name: 'OVO', logo: './finances/ovo.png' },
];

const PaymentMethodPage = () => {
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);
    const [inputValues, setInputValues] = useState({});
    const [, setErrors] = useState({}); // ✅ Tambahkan ini
    const [inputErrors, setInputErrors] = useState({});

    const {
        setPaymentPhoneNumber,
        setSelectedMethod,
    } = usePayment();

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
        setErrors({}); // Reset error saat mengganti metode
    };

    const handleInputChange = (method, value) => {
        setInputValues((prev) => ({ ...prev, [method]: value }));
        if (value.trim()) {
            setErrors((prev) => ({ ...prev, [method]: '' })); // Hapus error kalau sudah ada input
        }
    };

    const handleContinue = () => {
        const selected = paymentMethods[openIndex];
        const methodName = selected?.name;
        const phone = inputValues[methodName] || '';

        if (!phone.trim()) {
            setInputErrors((prev) => ({
                ...prev,
                [methodName]: 'Nomor HP harus diisi.',
            }));
            return;
        }

        // Reset error jika valid
        setInputErrors((prev) => ({
            ...prev,
            [methodName]: '',
        }));

        setPaymentPhoneNumber(phone);
        setSelectedMethod(methodName);
        navigate('/confirmation');
    };


    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
            <NavbarTransaction
                title="Pilih Pembayaran"
                onBack={() => navigate(-1)}
            />

            <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4, px: 2 }}>
                <Typography variant="subtitle1" fontWeight={600} mb={2}>
                    E-wallet
                </Typography>
                <List>
                    {paymentMethods.map((item, index) => (
                        <React.Fragment key={item.name}>
                            <ListItem
                                button
                                onClick={() => handleToggle(index)}
                                secondaryAction={
                                    openIndex === index ? (
                                        <ArrowDown2 size="16" color="#4D4D4D" variant="Outline" />
                                    ) : (
                                        <ArrowRight2 size="16" color="#4D4D4D" variant="Outline" />
                                    )
                                }
                            >
                                <ListItemAvatar>
                                    <Box
                                        component="img"
                                        src={item.logo}
                                        alt={item.name}
                                        sx={{
                                            width: 155,
                                            height: 65,
                                            objectFit: 'contain',
                                            display: 'block',
                                        }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography fontWeight={600} fontSize="16px">
                                            {item.name}
                                        </Typography>
                                    }
                                />
                            </ListItem>

                            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                                <Box sx={{ px: 3, pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        placeholder={`Masukkan nomor ${item.name}`}
                                        variant="outlined"
                                        value={inputValues[item.name] || ''}
                                        onChange={(e) => {
                                            handleInputChange(item.name, e.target.value);
                                            // Reset error saat pengguna mulai mengetik
                                            setInputErrors((prev) => ({
                                                ...prev,
                                                [item.name]: '',
                                            }));
                                        }}
                                        error={!!inputErrors[item.name]}
                                        helperText={inputErrors[item.name]}
                                        InputProps={{
                                            sx: {
                                                borderRadius: 999,
                                                bgcolor: '#fff',
                                            },
                                        }}
                                    />

                                </Box>
                            </Collapse>

                            {index < paymentMethods.length - 1 && (
                                <Divider sx={{ mx: 2 }} />
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Box>

            <Box sx={{ position: 'fixed', bottom: 20, left: 0, right: 0, px: 2 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleContinue}
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
                    Lanjutkan
                </Button>
            </Box>
        </Box>
    );
};

export default PaymentMethodPage;
