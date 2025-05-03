import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Crown, Code, Star } from 'iconsax-reactjs';
import { useNavigate } from 'react-router-dom';
import { getPackageById } from '../services/api';

const HeroSection = () => {
    const navigate = useNavigate();
    // Fungsi untuk menangani klik tombol beli paket
    const handleBuyPackage = async () => {
        const packageId = 1; // Misalnya ID paket yang diinginkan adalah 1
        try {
            const response = await getPackageById(packageId); // Mengambil paket berdasarkan ID
            const packageData = response.data; // Menyimpan data paket
            localStorage.setItem('mainPackage', JSON.stringify(packageData)); // Menyimpan data paket di localStorage
            navigate('/checkout'); // Mengarahkan ke halaman checkout
        } catch (error) {
            console.error('Gagal mengambil data paket:', error);
        }
    };

    return (
        <Box
            sx={{
                bgcolor: '#EFF3FA',
                px: 4,
                py: 8,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 4,
                width: '100%',
            }}
        >
            {/* Left Section */}
            <Box flex={1}>
                {/* Badge */}
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 2,
                        py: 1,
                        bgcolor: 'white',
                        borderRadius: '999px',
                        mb: 2,
                    }}
                >
                    <Crown size="20" color="#000" />
                    <Typography fontSize={14} fontWeight="600">
                        Paket Kuota Paling Populer
                    </Typography>
                </Box>

                {/* Title */}
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="black"
                    sx={{ mb: 1 }}
                >
                    Super Seru 25 GB
                </Typography>

                {/* Subtitle */}
                <Typography fontSize={16} color="#6B7280" mb={3}>
                    Telkomsel
                </Typography>

                {/* Button */}
                <Button
                    onClick={handleBuyPackage}  // Handle click untuk membeli paket
                    variant="contained"
                    sx={{
                        textTransform: 'none',
                        borderRadius: '999px',
                        px: 4,
                        py: 1.5,
                        fontWeight: 'bold',
                        bgcolor: '#0063F7',
                        ':hover': {
                            bgcolor: '#0056d2',
                        },
                    }}
                >
                    Beli Paket
                </Button>
            </Box>

            {/* Right Section - Image */}
            <Box
                sx={{
                    flex: 1,
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    src="/hero-illust.png"
                    alt="5G Illustration"
                    sx={{
                        width: '100%',
                        maxWidth: 500,
                        borderRadius: '24px',
                    }}
                />

                {/* Tag - Kuota 25 GB */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: -20,
                        bottom: 40,
                        display: 'flex',
                        alignItems: 'center',
                        bgcolor: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        boxShadow: 3,
                        gap: 1.5,
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: '#FFD600',
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Code size="16" color="#000" />
                    </Box>
                    <Typography fontSize={14} fontWeight={600}>
                        Kuota 25 GB
                    </Typography>
                </Box>

                {/* Tag - Koneksi Cepat */}
                <Box
                    sx={{
                        position: 'absolute',
                        right: -20,
                        top: 40,
                        display: 'flex',
                        alignItems: 'center',
                        bgcolor: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        boxShadow: 3,
                        gap: 1.5,
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: '#FFD600',
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Star size="16" color="#000" />
                    </Box>
                    <Typography fontSize={14} fontWeight={600}>
                        Koneksi Cepat
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;

// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { Crown, Code, Star } from 'iconsax-reactjs';

// const HeroSection = () => {
//     return (
//         <Box
//             sx={{
//                 bgcolor: '#EFF3FA',
//                 px: 4,
//                 py: 8,
//                 display: 'flex',
//                 flexDirection: { xs: 'column', md: 'row' },
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 gap: 4,
//                 width: '100%',
//             }}
//         >
//             {/* Left Section */}
//             <Box flex={1}>
//                 {/* Badge */}
//                 <Box
//                     sx={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         gap: 1,
//                         px: 2,
//                         py: 1,
//                         bgcolor: 'white',
//                         borderRadius: '999px',
//                         mb: 2,
//                     }}
//                 >
//                     <Crown size="20" color="#000" />
//                     <Typography fontSize={14} fontWeight="600">
//                         Paket Kuota Paling Populer
//                     </Typography>
//                 </Box>

//                 {/* Title */}
//                 <Typography
//                     variant="h3"
//                     fontWeight="bold"
//                     color="black"
//                     sx={{ mb: 1 }}
//                 >
//                     Super Seru 25 GB
//                 </Typography>

//                 {/* Subtitle */}
//                 <Typography fontSize={16} color="#6B7280" mb={3}>
//                     Telkomsel
//                 </Typography>

//                 {/* Button */}
//                 <Button
//                     variant="contained"
//                     sx={{
//                         textTransform: 'none',
//                         borderRadius: '999px',
//                         px: 4,
//                         py: 1.5,
//                         fontWeight: 'bold',
//                         bgcolor: '#0063F7',
//                         ':hover': {
//                             bgcolor: '#0056d2',
//                         },
//                     }}
//                 >
//                     Beli Paket
//                 </Button>
//             </Box>

//             {/* Right Section - Image */}
//             <Box
//                 sx={{
//                     flex: 1,
//                     position: 'relative',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}
//             >
//                 <Box
//                     component="img"
//                     src="/hero-illust.png"
//                     alt="5G Illustration"
//                     sx={{
//                         width: '100%',
//                         maxWidth: 500,
//                         borderRadius: '24px',
//                     }}
//                 />

//                 {/* Tag - Kuota 25 GB */}
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         left: -20,
//                         bottom: 40,
//                         display: 'flex',
//                         alignItems: 'center',
//                         bgcolor: 'white',
//                         px: 2,
//                         py: 1,
//                         borderRadius: 2,
//                         boxShadow: 3,
//                         gap: 1.5,
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             bgcolor: '#FFD600',
//                             width: 24,
//                             height: 24,
//                             borderRadius: '50%',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                         }}
//                     >
//                         <Code size="16" color="#000" />
//                     </Box>
//                     <Typography fontSize={14} fontWeight={600}>
//                         Kuota 25 GB
//                     </Typography>
//                 </Box>

//                 {/* Tag - Koneksi Cepat */}
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         right: -20,
//                         top: 40,
//                         display: 'flex',
//                         alignItems: 'center',
//                         bgcolor: 'white',
//                         px: 2,
//                         py: 1,
//                         borderRadius: 2,
//                         boxShadow: 3,
//                         gap: 1.5,
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             bgcolor: '#FFD600',
//                             width: 24,
//                             height: 24,
//                             borderRadius: '50%',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                         }}
//                     >
//                         <Star size="16" color="#000" />
//                     </Box>
//                     <Typography fontSize={14} fontWeight={600}>
//                         Koneksi Cepat
//                     </Typography>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default HeroSection;
