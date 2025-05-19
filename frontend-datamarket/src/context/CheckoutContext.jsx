import React, { createContext, useState, useContext, useEffect } from "react";

const CheckoutContext = createContext();

export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
    // Load from localStorage saat inisialisasi
    const [phoneNumber, setPhoneNumber] = useState(() => {
        return localStorage.getItem("phoneNumber") || "";
    });

    const [selectedAddOns, setSelectedAddOns] = useState(() => {
        const stored = localStorage.getItem("selectedAddOns");
        return stored ? JSON.parse(stored) : [];
    });

    const [mainPackage, setMainPackage] = useState(() => {
        const stored = localStorage.getItem("mainPackage");
        return stored ? JSON.parse(stored) : null;
    });

    // Simpan ke localStorage setiap kali ada perubahan
    useEffect(() => {
        localStorage.setItem("phoneNumber", phoneNumber);
    }, [phoneNumber]);

    useEffect(() => {
        localStorage.setItem("selectedAddOns", JSON.stringify(selectedAddOns));
    }, [selectedAddOns]);

    useEffect(() => {
        localStorage.setItem("mainPackage", JSON.stringify(mainPackage));
    }, [mainPackage]);

    // Reset semua state dan hapus localStorage
    const resetCheckout = () => {
        setPhoneNumber("");
        setSelectedAddOns([]);
        setMainPackage(null);
        localStorage.removeItem("phoneNumber");
        localStorage.removeItem("selectedAddOns");
        localStorage.removeItem("mainPackage");
    };

    const value = {
        phoneNumber,
        setPhoneNumber,
        selectedAddOns,
        setSelectedAddOns,
        mainPackage,
        setMainPackage,
        resetCheckout,
    };

    return (
        <CheckoutContext.Provider value={value}>
            {children}
        </CheckoutContext.Provider>
    );
};
