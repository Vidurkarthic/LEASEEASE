import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this CSS file includes the necessary styles
import { Menu, MenuItem, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Home = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Policies', path: '/policies' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Cart', path: '/cart' },
  ];

  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
  const [productsMenuAnchor, setProductsMenuAnchor] = useState(null);

  const handleAccountMenuOpen = (event) => {
    setAccountMenuAnchor(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountMenuAnchor(null);
  };

  const handleProductsMenuOpen = (event) => {
    setProductsMenuAnchor(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsMenuAnchor(null);
  };

  return (
    <div>
      <header>
        <nav className='navbar'>
          <h1 className='title'>LEASE EASE</h1>
          <ul className='navopp'>
            {navItems.map((item, index) => (
              <li key={index} style={{ cursor: 'pointer', margin: '0 10px' }}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li onClick={handleProductsMenuOpen} style={{ cursor: 'pointer', margin: '0 10px' }}>
              Products
            </li>
            <li>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="account-menu"
                aria-haspopup="true"
                onClick={handleAccountMenuOpen}
                color="inherit"
                style={{ transform: 'scale(1.5)', verticalAlign: 'middle', position: 'relative', top: '-8px' }}
              >
                <AccountCircle />
              </IconButton>
            </li>
          </ul>
        </nav>
      </header>

      {/* Account Menu */}
      <Menu
        id="account-menu"
        anchorEl={accountMenuAnchor}
        keepMounted
        open={Boolean(accountMenuAnchor)}
        onClose={handleAccountMenuClose}
      >
        <MenuItem onClick={handleAccountMenuClose}>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
        </MenuItem>
        <MenuItem onClick={handleAccountMenuClose}>
          <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
        </MenuItem>
      </Menu>

      {/* Products Menu */}
      <Menu
        id="products-menu"
        anchorEl={productsMenuAnchor}
        keepMounted
        open={Boolean(productsMenuAnchor)}
        onClose={handleProductsMenuClose}
      >
        <MenuItem onClick={handleProductsMenuClose}>
          <Link to="/product1" style={{ textDecoration: 'none', color: 'inherit' }}>Product 1</Link>
        </MenuItem>
        <MenuItem onClick={handleProductsMenuClose}>
          <Link to="/product2" style={{ textDecoration: 'none', color: 'inherit' }}>Product 2</Link>
        </MenuItem>
        <MenuItem onClick={handleProductsMenuClose}>
          <Link to="/product3" style={{ textDecoration: 'none', color: 'inherit' }}>Product 3</Link>
        </MenuItem>
        <MenuItem onClick={handleProductsMenuClose}>
          <Link to="/product4" style={{ textDecoration: 'none', color: 'inherit' }}>Product 4</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Home;
