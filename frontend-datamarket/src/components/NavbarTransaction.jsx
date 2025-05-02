import { ArrowLeft } from 'iconsax-reactjs';
import { Box, Avatar, IconButton, Typography } from '@mui/material';

const NavbarTransaction = ({ title = "Judul Halaman", onBack }) => {
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

            {/* Kanan: Icon dan Avatar */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton sx={{ bgcolor: 'white', width: 36, height: 36 }}>
                    <img
                        src="/icon-transaksi.svg"
                        alt="Icon"
                        style={{ width: 20, height: 20 }}
                    />
                </IconButton>
                <Avatar
                    src="/avatar.jpg"
                    alt="User"
                    sx={{ width: 36, height: 36 }}
                />
            </Box>
        </Box>
    );
};

export default NavbarTransaction;