// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import Policies from './components/Policies';
import ContactUs from './components/ContactUs';
import NAV from './components/NAV';
import Prod1 from './components/Prod1';
import Prod2 from './components/Prod2';
import Prod3 from './components/Prod3';
import Prod4 from './components/Prod4';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import ProfilePage from './components/ProfilePage';
import SearchResults from './components/SearchResults';


const AppRouter = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<NAV />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product1" element={<Prod1 />} />
          <Route path="/product2" element={<Prod2 />} />
          <Route path="/product3" element={<Prod3 />} />
          <Route path="/product4" element={<Prod4 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default AppRouter;
