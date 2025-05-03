import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProviderList from '../components/ProviderList';
import PopularPackages from '../components/PopularPackages';

const HomePage = () => {
    return (
        <Box bgcolor="#EFF3FA">
            <Navbar />
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <HeroSection />
                <PopularPackages />
                <ProviderList />
            </Container>
        </Box>
    );
};

export default HomePage;
