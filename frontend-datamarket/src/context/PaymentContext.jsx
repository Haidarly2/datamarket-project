import { createContext, useState, useContext } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [paymentPhoneNumber, setPaymentPhoneNumber] = useState('');
    const [selectedMethod, setSelectedMethod] = useState(null);
    const resetPayment = () => {
        setPaymentPhoneNumber('');
        setSelectedMethod(null);
    };
    
    return (
        <PaymentContext.Provider value={{
            paymentPhoneNumber,
            setPaymentPhoneNumber,
            selectedMethod,
            setSelectedMethod,
            resetPayment,
        }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePayment = () => useContext(PaymentContext);
