// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
    Paper,
} from '@mui/material';
import { Message, Lock, Eye, EyeSlash } from 'iconsax-reactjs';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCheckout } from '../context/CheckoutContext';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const redirectPath = queryParams.get('redirect') || '/customers';
    const { setIsLoggedIn } = useAuth();
    const { setMainPackage } = useCheckout();

    const navigate = useNavigate();

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleLogin = () => {
        if (email === 'admin@datamart.com' && password === '123456') {
            localStorage.setItem('isLoggedIn', 'true');

            const storedPackage = localStorage.getItem('selectedPackage');
            if (storedPackage) {
                setMainPackage(JSON.parse(storedPackage));
                localStorage.removeItem('selectedPackage');
            }

            setIsLoggedIn(true);
            navigate(redirectPath);
        } else {
            alert('Email atau password salah');
        }
    };


    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#f1f5fb',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: 400,
                    px: 4,
                    py: 5,
                    borderRadius: 3,
                    textAlign: 'center',
                }}
            >
                <Box display="flex" alignItems="center">
                    <img src="/logo-datamart.png" alt="DataMart" height={28} style={{ marginRight: 8 }} />
                    <Typography variant="h6" fontWeight="bold" color="white">
                        DataMart
                    </Typography>
                </Box>

                <Typography variant="h6" fontWeight="bold" textAlign="left" mb={2}>
                    Masuk
                </Typography>

                <TextField
                    fullWidth
                    placeholder="Masukkan email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Message size="20" />
                            </InputAdornment>
                        ),
                        sx: { borderRadius: '999px', bgcolor: 'white' },
                    }}
                />

                <TextField
                    fullWidth
                    placeholder="Masukkan password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock size="20" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePassword} edge="end">
                                    {showPassword ? <EyeSlash size="20" /> : <Eye size="20" />}
                                </IconButton>
                            </InputAdornment>
                        ),
                        sx: { borderRadius: '999px', bgcolor: 'white' },
                    }}
                />

                <Typography
                    variant="body2"
                    sx={{ textAlign: 'right', mt: 1, mb: 3, cursor: 'pointer' }}
                >
                    Lupa Password
                </Typography>

                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleLogin}
                    sx={{
                        bgcolor: '#0d5fe9',
                        borderRadius: '999px',
                        py: 1.5,
                        fontWeight: 'bold',
                        mb: 2,
                        textTransform: 'none',
                        fontSize: '16px',
                        '&:hover': {
                            bgcolor: '#0b4fcc',
                        },
                    }}
                >
                    Masuk
                </Button>

                <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                        borderRadius: '999px',
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderColor: '#d9d9d9',
                    }}
                >
                    Daftar
                </Button>
            </Paper>
        </Box>
    );
};

export default LoginPage;
