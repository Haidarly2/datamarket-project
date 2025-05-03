import React, { createContext, useState, useContext } from "react";

const CheckoutContext = createContext();

export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [mainPackage, setMainPackage] = useState(null);

    const resetCheckout = () => {
        setPhoneNumber("");
        setSelectedAddOns([]);
        setMainPackage(null);
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