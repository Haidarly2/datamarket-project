import React from 'react';
import { Box, Typography, Avatar, InputBase, Paper, IconButton } from '@mui/material';
import { SearchNormal1, MessageQuestion } from 'iconsax-reactjs';
// import { useNavigate } from "react-router-dom";

const NavbarCustomers = () => {
    // const navigate = useNavigate();

    return (
        <Box sx={{ bgcolor: '#EFF3FA', px: 4, py: 2, mb: 0 }}>
            <Box
                sx={{
                    bgcolor: '#0057E2',
                    borderRadius: '999px',
                    px: 4,
                    py: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* Logo */}
                <Box display="flex" alignItems="center" gap={1}>
                    <img src="/logo-datamart.png" alt="DataMart" height={28} />
                    <Typography variant="h6" fontWeight="bold" color="white">
                        DataMart
                    </Typography>
                </Box>

                {/* Search Input */}
                <Paper
                    component="form"
                    sx={{
                        px: 2,
                        py: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        width: 300,
                        borderRadius: '12px',
                        bgcolor: 'white',
                        boxShadow: 'none',
                    }}
                >
                    <InputBase
                        sx={{ flex: 1 }}
                        placeholder="Cari disini"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="submit" sx={{ p: '4px' }} aria-label="search">
                        <SearchNormal1 size="20" />
                    </IconButton>
                </Paper>

                {/* Icon & Masuk Button */}
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
                    <Avatar src="/avatar.png" alt="Profile" />
                </Box>
            </Box>
        </Box>
    );
};

export default NavbarCustomers;
