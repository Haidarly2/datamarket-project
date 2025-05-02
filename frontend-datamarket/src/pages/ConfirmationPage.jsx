import React from 'react';
import {
    Box,
    Typography,
    Divider,
    Avatar,
    Button,
} from '@mui/material';
import { ArrowLeft, MessageText } from 'iconsax-reactjs';

const ConfirmationPage = () => {
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
                    Konfirmasi Pembelian
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <MessageText size="20" color="#fff" variant="Outline" />
                    <Avatar src="/images/user-avatar.jpg" />
                </Box>
            </Box>

            {/* Ringkasan */}
            <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6, px: 4 }}>
                <Typography fontWeight={600} fontSize="16px" mb={2}>
                    Ringkasan
                </Typography>
                <Divider sx={{ mb: 2 }} />

                {/* Paket */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>Super Seru 25 GB</Typography>
                    <Typography fontWeight={500}>Rp 50.000</Typography>
                </Box>

                {/* Add-ons */}
                <Typography sx={{ mt: 2 }}>Add-ons</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>Spotify 3 GB</Typography>
                    <Typography fontWeight={500}>Rp 35.000</Typography>
                </Box>

                {/* Metode Bayar */}
                <Typography sx={{ mt: 3 }}>Metode Bayar</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography fontWeight={600}>Gopay</Typography>
                    <Typography>0821xxxxxxxx</Typography>
                </Box>

                {/* Total */}
                <Divider sx={{ mt: 2, mb: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography fontWeight={600}>Total</Typography>
                    <Typography fontWeight={600}>Rp 85.000</Typography>
                </Box>
            </Box>

            {/* Tombol Bayar */}
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