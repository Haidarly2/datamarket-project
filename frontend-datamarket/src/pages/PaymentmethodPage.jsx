import React, { useState } from 'react';
import {
    Box,
    Typography,
    Avatar,
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
    ArrowLeft,
    ArrowRight2,
    ArrowDown2,
    MessageText,
} from 'iconsax-reactjs';

const paymentMethods = [
    { name: 'Gopay', logo: './finances/gopay.png' },
    { name: 'Dana', logo: './finances/dana.png' },
    { name: 'ShopeePay', logo: './finances/shoopepay.png' },
    { name: 'OVO', logo: './finances/ovo.png' },
];

const PaymentMethodPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
            {/* Header */}
            <Box
                sx={{
                    bgcolor: '#0B63E5',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    px: 3,
                    py: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ArrowLeft size="20" color="#fff" />
                    <Typography variant="subtitle1" fontWeight={600} color="#fff">
                        Kembali
                    </Typography>
                </Box>
                <Typography variant="h6" fontWeight={700} color="#fff">
                    Pilih Pembayaran
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <MessageText size="20" color="#fff" variant="Outline" />
                    <Avatar src="/images/user-avatar.jpg" />
                </Box>
            </Box>

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
