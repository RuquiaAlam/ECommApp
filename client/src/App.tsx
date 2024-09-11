
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import { AuthPage } from './pages/auth';
import { CheckoutPage } from './pages/checkout.tsx';
import { PurchasedItemsPage } from './pages/purchased-items';
import { ShopPage } from './pages/shop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
          <Navbar />

          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/purchased-items" element={<PurchasedItemsPage />} />
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
