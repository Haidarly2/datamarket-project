import { Box, Button, Typography } from '@mui/material';
import { TickCircle } from 'iconsax-reactjs'; // pastikan ini dari vuesax-react

const SuccessPage = ({ onBack }) => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 2,
                bgcolor: 'white',
            }}
        >
            {/* Icon Ceklis */}
            <Box
                sx={{
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    backgroundColor: '#22C55E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 4,
                }}
            >
                <TickCircle size="100" color="white" variant="Bold" />
            </Box>

            {/* Judul */}
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                Pembayaran Berhasil
            </Typography>

            {/* Subjudul */}
            <Typography sx={{ mb: 4 }}>
                Paket Data Akan Segera Dikirimkan ke Nomor Anda
            </Typography>

            {/* Tombol Kembali */}
            <Button
                onClick={onBack}
                variant="contained"
                sx={{
                    bgcolor: '#0B63E5',
                    borderRadius: '999px',
                    px: 5,
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 'bold',
                }}
            >
                Kembali
            </Button>
        </Box>
    );
};

export default SuccessPage;
