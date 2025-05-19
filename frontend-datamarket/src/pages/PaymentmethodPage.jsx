import React, { useState, useEffect } from 'react';
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
import { getPaymentMethods } from '../services/api';

const PaymentMethodPage = () => {
    const navigate = useNavigate();
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);
    const [inputValues, setInputValues] = useState({});
    const [, setErrors] = useState({});
    const [inputErrors, setInputErrors] = useState({});

    const {
        setPaymentPhoneNumber,
        setSelectedMethod,
    } = usePayment();

    useEffect(() => {
        const fetchPaymentMethods = async () => {
            try {
                const response = await getPaymentMethods();
                setPaymentMethods(response.data);
            } catch (error) {
                console.error('Gagal mengambil data metode pembayaran:', error);
            }
        };

        fetchPaymentMethods();
    }, []);

    const sanitizePhoneNumberInput = (value) => {
        const onlyDigits = value.replace(/[^\d]/g, "");
        return onlyDigits.slice(0, 13);
    };

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
        setErrors({});
    };

    const handleInputChange = (method, value) => {
        const sanitizedValue = sanitizePhoneNumberInput(value);
        setInputValues((prev) => ({ ...prev, [method]: sanitizedValue }));
        if (sanitizedValue.trim()) {
            setInputErrors((prev) => ({ ...prev, [method]: '' }));
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

        setInputErrors((prev) => ({
            ...prev,
            [methodName]: '',
        }));

        setPaymentPhoneNumber(phone);
        setSelectedMethod(methodName);
        navigate('/confirmation');
    };

    return (
        <Box bgcolor={"#EFF3FA"} minHeight="100vh" width="100%">
            <Box sx={{ p: 2, maxWidth: 950, mx: "auto" }}>
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
                                                marginRight: 2,
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
                                    <Box sx={{ px: 3, pb: 2, pt: 1 }}>
                                        <TextField
                                            fullWidth
                                            placeholder={`Masukkan nomor ${item.name}`}
                                            variant="outlined"
                                            value={inputValues[item.name] || ''}
                                            onChange={(e) => handleInputChange(item.name, e.target.value)}
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
                Lanjutkan
            </Button>
        </Box>
    );
};

export default PaymentMethodPage;