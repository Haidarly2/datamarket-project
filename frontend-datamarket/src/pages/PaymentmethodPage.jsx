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

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
            {/* Header */}
            <NavbarTransaction
                title="Pilih Pembayaran"
                onBack={() => navigate(-1)}
            />

            {/* Payment Methods */}
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

                            {/* Collapse Input */}
                            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                                <Box sx={{ px: 3, pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        placeholder={`Masukkan nomor ${item.name}`}
                                        variant="outlined"
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

            {/* Bottom Button */}
            <Box sx={{ position: 'fixed', bottom: 20, left: 0, right: 0, px: 2 }}>
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
                    Lanjutkan
                </Button>
            </Box>
        </Box>
    );
};

export default PaymentMethodPage;
