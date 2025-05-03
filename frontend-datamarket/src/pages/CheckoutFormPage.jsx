import React, { useState, useEffect } from "react";
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
import NavbarTransaction from "../components/NavbarTransaction";
import { useCheckout } from "../context/CheckoutContext";
import { useNavigate } from "react-router-dom";
import { getAddOns } from "../services/api"; // import getAddOns

const CheckoutFormPage = () => {
    const {
        phoneNumber,
        setPhoneNumber,
        selectedAddOns,
        setSelectedAddOns,
        mainPackage,
        setMainPackage,
    } = useCheckout();

    const [addOns, setAddOns] = useState([]); // state untuk menyimpan data add-ons
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!mainPackage) {
            const stored = localStorage.getItem('mainPackage');
            if (stored) {
                setMainPackage(JSON.parse(stored));
            }
        }

        setPhoneNumber("");         // reset nomor hp
        setSelectedAddOns([]);      // reset add-ons

        const fetchAddOns = async () => {
            try {
                const response = await getAddOns(); // panggil API untuk mendapatkan add-ons
                setAddOns(response.data); // set data add-ons dari API
            } catch (error) {
                console.error('Gagal mengambil data add-ons:', error);
            }
        };

        fetchAddOns(); // panggil fungsi untuk mengambil add-ons
    }, [setPhoneNumber, setSelectedAddOns, mainPackage, setMainPackage]);

    const handleToggleAddOn = (item) => {
        setSelectedAddOns((prev) => {
            const exists = prev.find((addOn) => addOn.name === item.name);
            if (exists) {
                return prev.filter((addOn) => addOn.name !== item.name);
            } else {
                return [...prev, item];
            }
        });
    };

    const handleContinue = () => {
        if (phoneNumber.trim() === "") {
            setError("Nomor handphone harus diisi.");
            return;
        }
        setError("");
        navigate("/payment");
    };

    const handleExitCheckout = () => {
        localStorage.removeItem('mainPackage');
        navigate('/customers');
    };

    return (
        <Box bgcolor={"#EFF3FA"} minHeight="100vh" width="100%">
            <Box sx={{ p: 2, maxWidth: "fit-content", mx: "auto" }}>
                {/* Header */}
                <NavbarTransaction
                    title="Pembelian Paket"
                    onBack={handleExitCheckout}
                />

                {/* Paket Title */}
                <Box textAlign="center" mb={3}>
                    <Typography variant="h5" fontWeight="bold">
                        {mainPackage?.name || "Nama Paket"}
                    </Typography>
                    <Stack direction="row" justifyContent="center" spacing={4} mt={2}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Star size="35" variant="Broken" color="#1976d2" />
                            <Typography>
                                {mainPackage?.quota || "-"}
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Calendar size="35" variant="Broken" color="#1976d2" />
                            <Typography>
                                {mainPackage?.expiration || "-"}
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <DollarCircle size="35" variant="Broken" color="#1976d2" />
                            <Typography>
                                {mainPackage?.price || "-"}
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>

                {/* Nomor HP */}
                <Card
                    sx={{
                        p: 2,
                        borderRadius: 4,
                        mb: 4,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                >
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
                            startAdornment: (
                                <ProfileCircle size="20" style={{ marginRight: 8 }} />
                            ),
                            sx: { borderRadius: 999 },
                        }}
                    />
                </Card>

                {/* Add-ons */}
                <Box mb={5}>
                    <Typography fontWeight={500} mb={2}>
                        Add-ons (Optional)
                    </Typography>
                    <Box sx={{ display: "flex", overflowX: "auto", gap: 2, pb: 1 }}>
                        {addOns.map((item, idx) => {
                            const isSelected = selectedAddOns.some((addOn) => addOn.name === item.name);
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
                                            onClick={() => handleToggleAddOn(item)}
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
        </Box>
    );
};

export default CheckoutFormPage;