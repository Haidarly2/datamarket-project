import React, { createContext, useState, useContext, useEffect } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [paymentPhoneNumber, setPaymentPhoneNumber] = useState(() => {
        return localStorage.getItem('paymentPhoneNumber') || '';
    });

    const [selectedMethod, setSelectedMethod] = useState(() => {
        const stored = localStorage.getItem('selectedMethod');
        return stored ? JSON.parse(stored) : null;
    });

    useEffect(() => {
        localStorage.setItem('paymentPhoneNumber', paymentPhoneNumber);
    }, [paymentPhoneNumber]);

    useEffect(() => {
        localStorage.setItem('selectedMethod', JSON.stringify(selectedMethod));
    }, [selectedMethod]);

    const resetPayment = () => {
        setPaymentPhoneNumber('');
        setSelectedMethod(null);
        localStorage.removeItem('paymentPhoneNumber');
        localStorage.removeItem('selectedMethod');
    };

    return (
        <PaymentContext.Provider
            value={{
                paymentPhoneNumber,
                setPaymentPhoneNumber,
                selectedMethod,
                setSelectedMethod,
                resetPayment,
            }}
        >
            {children}
        </PaymentContext.Provider>
    );
};

export const usePayment = () => useContext(PaymentContext);
