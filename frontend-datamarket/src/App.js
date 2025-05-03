import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import TransactionPage from './pages/TransactionPage';
import NotFoundPage from './pages/NotFoundPage';
import CheckoutFormPage from "./pages/CheckoutFormPage";
import PaymentMethodPage from "./pages/PaymentmethodPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import SuccessPage from "./pages/SuccessPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/checkout" element={<CheckoutFormPage />} />
          <Route path="/payment" element={<PaymentMethodPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/success" element={<SuccessPage />} />
          {/* Add more routes as needed */}
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
