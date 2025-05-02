import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from "react-router-dom";

const packages = [
    {
        name: 'Paket Super Seru 25 GB',
        provider: 'Telkomsel',
        quota: 'Kuota 25 GB',
        price: 'Rp 24.000.000',
    },
    {
        name: 'Paket Xtra Combo Flex M',
        provider: 'XL Axiata',
        quota: 'Kuota 25 GB',
        price: 'Rp 24.000.000',
    },
    {
        name: 'Paket Super Seru 50 GB',
        provider: 'Telkomsel',
        quota: 'Kuota 50 GB',
        price: 'Rp 24.000.000',
    },
    {
        name: 'Paket Xtra Combo Flex M',
        provider: 'XL Axiata',
        quota: 'Kuota 25 GB',
        price: 'Rp 24.000.000',
    },
    // {
    //     name: 'Paket Kaget',
    //     provider: 'by.U',
    //     quota: 'Kuota 20 GB',
    //     price: 'Rp 24.000.000',
    // },
];

const PopularPackages = () => {
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
                {packages.map((pkg, idx) => (
                    <Grid item key={idx}>
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
                                component={Link}
                                to="/checkout"
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


// // src/components/PopularPackage.jsx
// import React from 'react';
// import {
//     Box,
//     Card,
//     CardContent,
//     Typography,
//     Button,
//     Grid,
//     Container
// } from '@mui/material';

// const packages = [
//     {
//         id: 1,
//         title: 'Paket Super Seru 25 GB',
//         provider: 'Telkomsel',
//         quota: '25 GB',
//         price: 'Rp 24.000.000',
//     },
//     {
//         id: 2,
//         title: 'Paket Xtra Combo Flex M',
//         provider: 'XL Axiata',
//         quota: '25 GB',
//         price: 'Rp 24.000.000',
//     },
//     {
//         id: 3,
//         title: 'Paket Super Seru 50 GB',
//         provider: 'Telkomsel',
//         quota: '50 GB',
//         price: 'Rp 24.000.000',
//     },
//     {
//         id: 4,
//         title: 'Paket Xtra Combo Flex M',
//         provider: 'XL Axiata',
//         quota: '25 GB',
//         price: 'Rp 24.000.000',
//     },
//     {
//         id: 5,
//         title: 'Paket Kaget',
//         provider: 'by.U',
//         quota: '20 GB',
//         price: 'Rp 24.000.000',
//     },
// ];

// export default function PopularPackage() {
//     return (
//         <Box py={6} bgcolor="#ffffff">
//             <Container>
//                 <Box
//                     display="flex"
//                     justifyContent="space-between"
//                     alignItems="center"
//                     mb={3}
//                 >
//                     <Typography variant="h6" fontWeight="bold">
//                         Paket Yang Populer
//                     </Typography>
//                     <Button
//                         variant="outlined"
//                         sx={{
//                             borderRadius: '999px',
//                             textTransform: 'none',
//                             fontWeight: 500,
//                         }}
//                     >
//                         Lihat semua
//                     </Button>
//                 </Box>

//                 <Grid container spacing={3}>
//                     {packages.map((pkg) => (
//                         <Grid item xs={12} sm={6} md={4} lg={2.4} key={pkg.id}>
//                             <Card
//                                 sx={{
//                                     borderRadius: 3,
//                                     boxShadow: 0,
//                                     border: '1px solid #E5E7EB',
//                                     height: '100%',
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography
//                                         variant="subtitle1"
//                                         fontWeight="bold"
//                                         gutterBottom
//                                     >
//                                         {pkg.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         {pkg.provider}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         Kuota {pkg.quota}
//                                     </Typography>
//                                     <Typography
//                                         variant="subtitle1"
//                                         sx={{ color: '#005ADC', fontWeight: 'bold', mt: 1 }}
//                                     >
//                                         {pkg.price}
//                                     </Typography>
//                                     <Button
//                                         variant="contained"
//                                         fullWidth
//                                         sx={{
//                                             mt: 2,
//                                             borderRadius: '999px',
//                                             textTransform: 'none',
//                                             backgroundColor: '#005ADC',
//                                             '&:hover': {
//                                                 backgroundColor: '#0041B8',
//                                             },
//                                         }}
//                                     >
//                                         Beli Paket
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }
