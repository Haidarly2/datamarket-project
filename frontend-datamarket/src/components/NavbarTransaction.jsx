import React, { useState } from "react";
import { ArrowLeft, MessageQuestion } from 'iconsax-reactjs';
import { Box, Avatar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavbarTransaction = ({ title = "Judul Halaman", onBack }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAuth();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        navigate('/home');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                bgcolor: '#0B63E5',
                color: 'white',
                borderRadius: '20px',
                px: 2,
                py: 1.5,
                mb: 3,
            }}
        >
            {/* Kiri: Tombol Kembali */}
            <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
                onClick={onBack}
            >
                <ArrowLeft size="20" color="white" />
                <Typography fontWeight="500">Kembali</Typography>
            </Box>

            {/* Tengah: Judul */}
            <Typography fontWeight="600" fontSize="16px">
                {title}
            </Typography>

            {/* Kanan: Icon & Avatar */}
            <Box display="flex" alignItems="center" gap={2}>
                <IconButton
                    sx={{
                        bgcolor: 'white',
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        p: 0,
                    }}
                >
                    <MessageQuestion size="20" color="#000" />
                </IconButton>

                {/* Avatar with Dropdown */}
                <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                    <Avatar src="/avatar.png" alt="Profile" />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleMenuClose}>Pengaturan</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};

export default NavbarTransaction;