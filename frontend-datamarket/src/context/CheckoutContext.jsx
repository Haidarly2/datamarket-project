import React, { createContext, useState, useContext } from "react";

// 1. Create context
const CheckoutContext = createContext();

// 2. Custom hook (agar lebih mudah diakses)
export const useCheckout = () => useContext(CheckoutContext);

// 3. Provider
export const CheckoutProvider = ({ children }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [mainPackage, setMainPackage] = useState(null);

    const value = {
        phoneNumber,
        setPhoneNumber,
        selectedAddOns,
        setSelectedAddOns,
        mainPackage,
        setMainPackage,
    };

    return (
        <CheckoutContext.Provider value={value}>
            {children}
        </CheckoutContext.Provider>
    );
};