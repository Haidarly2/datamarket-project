import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import HeroSection from '../components/HeroSection';
import ProviderList from '../components/ProviderList';
import PopularPackages from '../components/PopularPackages';
import NavbarCustomers from "../components/NavbarCustomers";
import { useCheckout } from "../context/CheckoutContext";

const CustomerPage = () => {
    const { resetCheckout } = useCheckout();

    useEffect(() => {
        resetCheckout();
    }, []);

    return (
        <Box bgcolor="#EFF3FA">
            <NavbarCustomers />
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <HeroSection />
                <PopularPackages />
                <ProviderList />
            </Container>
        </Box>
    );
};

export default CustomerPage;
