import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { getProviders } from '../services/api'; // gunakan helper function

const ProviderList = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProviders(); // gunakan helper
                setProviders(response.data);
            } catch (error) {
                console.error('Gagal mengambil data providers:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ px: 4, py: 6, bgcolor: '#ffffff' }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
                Cari Produk Berdasarkan
            </Typography>
            <Typography variant="h6" fontWeight="bold" mb={4}>
                Internet Provider
            </Typography>

            <Grid container spacing={3}>
                {providers.map((provider) => (
                    <Grid item key={provider.id}>
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
