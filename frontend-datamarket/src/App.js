import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
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
          <Route path="/checkout" element={<CheckoutFormPage />} />
          <Route path="/payment" element={<PaymentMethodPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
