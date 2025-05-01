import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const providers = [
    { name: 'Telkomsel', logo: '/providers/telkomsel.png' },
    { name: 'Indosat Ooredoo', logo: '/providers/indosat.png' },
    { name: 'Smartfren', logo: '/providers/smartfren.png' },
    { name: 'Tri', logo: '/providers/tri.png' },
    { name: 'by.U', logo: '/providers/byu.png' },
    { name: 'AXIS', logo: '/providers/axis.png' },
    { name: 'XL Axiata', logo: '/providers/xlaxiata.png' },
];

const ProviderList = () => {
    return (
        <Box sx={{ px: 4, py: 6, bgcolor: '#f5f9fd' }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
                Cari Produk Berdasarkan
            </Typography>
            <Typography variant="h6" fontWeight="bold" mb={4}>
                Internet Provider
            </Typography>

            <Grid container spacing={3}>
                {providers.map((provider, idx) => (
                    <Grid item key={provider.name}>
                        <Paper
                            elevation={1}
                            sx={{
                                width: 260,
                                height: 159,
                                borderRadius: 3,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src={provider.logo}
                                alt={provider.name}
                                sx={{
                                    maxHeight: 119,
                                    maxWidth: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProviderList;
