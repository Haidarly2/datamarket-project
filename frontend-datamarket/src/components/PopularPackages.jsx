import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../context/CheckoutContext";
import { useAuth } from '../context/AuthContext';
import { getPackages } from '../services/api'; // import API service

const PopularPackages = () => {
    const [packages, setPackages] = useState([]);
    const navigate = useNavigate();
    const { setMainPackage } = useCheckout();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        getPackages()
            .then((res) => setPackages(res.data))
            .catch((err) => console.error("Failed to fetch packages", err));
    }, []);

    const handleBuy = (pkg) => {
        if (!isLoggedIn) {
            localStorage.setItem('selectedPackage', JSON.stringify(pkg));
            navigate('/login?redirect=/checkout');
            return;
        }

        setMainPackage(pkg);
        localStorage.setItem('mainPackage', JSON.stringify(pkg));
        navigate('/checkout');
    };

    return (
        <Box sx={{ px: 4, py: 6, bgcolor: '#ffffff' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h6" fontWeight="bold">
                    Paket Yang Populer
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        textTransform: 'none',
                        borderRadius: 999,
                        px: 3,
                        fontWeight: 600,
                        borderColor: '#E5E5E5',
                        color: '#000',
                        fontSize: 14,
                    }}
                >
                    Lihat semua
                </Button>
            </Box>

            <Grid container spacing={3}>
                {packages.map((pkg) => (
                    <Grid item key={pkg.id}>
                        <Paper
                            elevation={0}
                            sx={{
                                width: 202,
                                height: 231,
                                borderRadius: 2,
                                border: '1px solid #E5E5E5',
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <Typography fontWeight="bold" fontSize={16} mb={0.5}>
                                    {pkg.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {pkg.provider}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={1.5}>
                                    {pkg.quota}
                                </Typography>
                                <Typography fontWeight="bold" fontSize={16} color="#0057FF">
                                    {pkg.price}
                                </Typography>
                            </Box>
                            <Button
                                onClick={() => handleBuy(pkg)}
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 2,
                                    textTransform: 'none',
                                    borderRadius: 999,
                                    bgcolor: '#0057FF',
                                    fontWeight: 600,
                                    ':hover': { bgcolor: '#0046cc' },
                                }}
                            >
                                Beli Paket
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PopularPackages;