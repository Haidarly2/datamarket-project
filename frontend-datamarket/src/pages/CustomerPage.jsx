import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from '../components/HeroSection';
import ProviderList from '../components/ProviderList';
import PopularPackages from '../components/PopularPackages';
import NavbarCustomers from "../components/NavbarCustomers";

const CustomerPage = () => {
    return (
        <Box bgcolor="#EFF3FA">
            <NavbarCustomers />
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <HeroSection />
                <ProviderList />
                <PopularPackages />
            </Container>
        </Box>
    );
};

export default CustomerPage;
