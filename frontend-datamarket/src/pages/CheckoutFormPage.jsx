import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Stack,
} from "@mui/material";
import {
    ProfileCircle,
    Star,
    Calendar,
    DollarCircle,
} from "iconsax-reactjs";
import NavbarCheckout from "../components/NavbarCheckout";
import { useCheckout } from "../context/CheckoutContext";
import { useNavigate } from "react-router-dom";

const addOns = [
    { name: "Telepon", duration: "28 Hari", detail: "38500 Menit", harga: "Rp 10.000" },
    { name: "Disney+", duration: "28 Hari", detail: "3 GB", harga: "Rp 10.000" },
    { name: "Whatsapp", duration: "28 Hari", detail: "2 GB", harga: "Rp 10.000" },
    { name: "Spotify", duration: "28 Hari", detail: "3 GB", harga: "Rp 10.000" },
    { name: "Facebook", duration: "28 Hari", detail: "2 GB", harga: "Rp 10.000" },
];

const CheckoutFormPage = () => {
    // const [phone, setPhone] = useState("");
    // const [selectedAddOns, setSelectedAddOns] = useState([]);
    const { phoneNumber, setPhoneNumber, selectedAddOns, setSelectedAddOns } = useCheckout();
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleToggleAddOn = (name) => {
        setSelectedAddOns((prev) =>
            prev.includes(name)
                ? prev.filter((item) => item !== name)
                : [...prev, name]
        );
    };

    const handleContinue = () => {
        if (phoneNumber.trim() === "") {
            setError("Nomor handphone harus diisi.");
            return;
        }
        setError("");
        navigate("/payment");
    };

    return (
        <Box sx={{ p: 2, maxWidth: 800, mx: "auto" }}>
            <NavbarCheckout onBack={() => navigate(-1)} />

            {/* Paket Title */}
            <Box textAlign="center" mb={3}>
                <Typography variant="h5" fontWeight="bold">
                    Super Seru 25 GB
                </Typography>
                <Stack direction="row" justifyContent="center" spacing={4} mt={2}>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <Star size="20" variant="Bold" color="#1976d2" />
                        <Typography>Kuota 25 GB</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <Calendar size="20" variant="Bold" color="#1976d2" />
                        <Typography>Masa Aktif 28 Hari</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <DollarCircle size="20" variant="Bold" color="#1976d2" />
                        <Typography>Rp 50.000</Typography>
                    </Stack>
                </Stack>
            </Box>

            {/* Nomor HP */}
            <Box mb={4}>
                <Typography fontWeight={500} mb={1}>
                    Nomor Handphone
                </Typography>
                <TextField
                    fullWidth
                    placeholder="Nomor tujuan"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    error={!!error}
                    helperText={error}
                    InputProps={{
                        startAdornment: <ProfileCircle size="20" style={{ marginRight: 8 }} />,
                        style: { borderRadius: 999 },
                    }}
                />
            </Box>

            {/* Add-ons */}
            <Box mb={5}>
                <Typography fontWeight={500} mb={2}>
                    Add-ons (Optional)
                </Typography>
                <Box sx={{ display: "flex", overflowX: "auto", gap: 2, pb: 1 }}>
                    {addOns.map((item, idx) => {
                        const isSelected = selectedAddOns.includes(item.name);
                        return (
                            <Card
                                key={idx}
                                sx={{ minWidth: 180, flexShrink: 0, borderRadius: 3 }}
                                variant="outlined"
                            >
                                <CardContent>
                                    <Typography fontWeight="bold">{item.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.duration}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={2}>
                                        {item.detail}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={2}>
                                        {item.harga}
                                    </Typography>
                                    <Button
                                        variant={isSelected ? "outlined" : "contained"}
                                        color={isSelected ? "success" : "primary"}
                                        fullWidth
                                        sx={{ borderRadius: 999 }}
                                        onClick={() => handleToggleAddOn(item.name)}
                                    >
                                        {isSelected ? "✓ Ditambahkan" : "Tambah"}
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Box>
            </Box>

            {/* Button Lanjutkan */}
            <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ borderRadius: 999 }}
                onClick={handleContinue}
            >
                Lanjutkan
            </Button>
        </Box>
    );
};

export default CheckoutFormPage;

{/* <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
    <Stack direction="row" alignItems="center" gap={1}>
        <IconButton>
            <ArrowLeft2 size="24" />
        </IconButton>
        <Typography variant="h6" fontWeight="bold">
            Pembelian Paket
        </Typography>
    </Stack>
    <Stack direction="row" alignItems="center" gap={2}>
        <IconButton>
            <Message size="24" />
        </IconButton>
        <IconButton>
            <ProfileCircle size="28" variant="Bold" />
        </IconButton>
    </Stack>
</Stack> */}