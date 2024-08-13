// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { Menu, MenuItem, IconButton, InputBase, Paper } from '@mui/material';
// // // import AccountCircle from '@mui/icons-material/AccountCircle';
// // // import SearchIcon from '@mui/icons-material/Search';
// // // import './Home.css';

// // // const Home = () => {
// // //   const navItems = [
// // //     { name: 'Home', path: '/' },
// // //     { name: 'About', path: '/about' },
// // //     { name: 'Policies', path: '/policies' },
// // //     { name: 'Contact Us', path: '/contact' },
// // //     { name: 'Cart', path: '/cart' },
// // //   ];

// // //   const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
// // //   const [productsMenuAnchor, setProductsMenuAnchor] = useState(null);
// // //   const [searchQuery, setSearchQuery] = useState('');

// // //   const handleAccountMenuOpen = (event) => {
// // //     setAccountMenuAnchor(event.currentTarget);
// // //   };

// // //   const handleAccountMenuClose = () => {
// // //     setAccountMenuAnchor(null);
// // //   };

// // //   const handleProductsMenuOpen = (event) => {
// // //     setProductsMenuAnchor(event.currentTarget);
// // //   };

// // //   const handleProductsMenuClose = () => {
// // //     setProductsMenuAnchor(null);
// // //   };

// // //   const handleSearchChange = (event) => {
// // //     setSearchQuery(event.target.value);
// // //   };

// // //   const handleSearchAction = () => {
// // //     console.log('Search action triggered:', searchQuery);
// // //   };

// // //   return (
// // //     <div>
// // //       <header>
// // //         <nav className='navbar'>
// // //           <h1 className='title'>LEASE EASE</h1>
// // //           <div className='nav-options'>
// // //             <ul className='navopp'>
// // //               {navItems.map((item, index) => (
// // //                 <li key={index} style={{ cursor: 'pointer', margin: '0 10px' }}>
// // //                   <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
// // //                     {item.name}
// // //                   </Link>
// // //                 </li>
// // //               ))}
// // //               <li onClick={handleProductsMenuOpen} style={{ cursor: 'pointer', margin: '0 10px' }}>
// // //                 Products
// // //               </li>
// // //             </ul>
// // //             <div className="search-form">
// // //               <IconButton type="button" aria-label="search" onClick={handleSearchAction}>
// // //                 <SearchIcon />
// // //               </IconButton>
// // //               <InputBase
// // //                 className="search-input"
// // //                 placeholder="Your Wishes Come True Here"
// // //                 inputProps={{ 'aria-label': 'search' }}
// // //                 value={searchQuery}
// // //                 onChange={handleSearchChange}
// // //               />
// // //             </div>
// // //             <IconButton
// // //               edge="end"
// // //               aria-label="account of current user"
// // //               aria-controls="account-menu"
// // //               aria-haspopup="true"
// // //               onClick={handleAccountMenuOpen}
// // //               color="inherit"
// // //               style={{ transform: 'scale(1.5)', verticalAlign: 'middle', position: 'relative',marginLeft:'10px' }}
// // //             >
// // //               <AccountCircle />
// // //             </IconButton>
// // //           </div>
// // //         </nav>
// // //       </header>

// // //       {/* Account Menu */}
// // //       <Menu
// // //         id="account-menu"
// // //         anchorEl={accountMenuAnchor}
// // //         keepMounted
// // //         open={Boolean(accountMenuAnchor)}
// // //         onClose={handleAccountMenuClose}
// // //       >
// // //         <MenuItem onClick={handleAccountMenuClose}>
// // //           <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
// // //         </MenuItem>
// // //         <MenuItem onClick={handleAccountMenuClose}>
// // //           <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
// // //         </MenuItem>
// // //       </Menu>

// // //       {/* Products Menu */}
// // //       <Menu
// // //         id="products-menu"
// // //         anchorEl={productsMenuAnchor}
// // //         keepMounted
// // //         open={Boolean(productsMenuAnchor)}
// // //         onClose={handleProductsMenuClose}
// // //       >
// // //         <MenuItem onClick={handleProductsMenuClose}>
// // //           <Link to="/product1" style={{ textDecoration: 'none', color: 'inherit' }}>Electronic</Link>
// // //         </MenuItem>
// // //         <MenuItem onClick={handleProductsMenuClose}>
// // //           <Link to="/product2" style={{ textDecoration: 'none', color: 'inherit' }}>Furniture</Link>
// // //         </MenuItem>
// // //         <MenuItem onClick={handleProductsMenuClose}>
// // //           <Link to="/product3" style={{ textDecoration: 'none', color: 'inherit' }}>Home essentials</Link>
// // //         </MenuItem>
// // //         <MenuItem onClick={handleProductsMenuClose}>
// // //           <Link to="/product4" style={{ textDecoration: 'none', color: 'inherit' }}>Mobiles & Lap</Link>
// // //         </MenuItem>
// // //       </Menu>
// // //     </div>
// // //   );
// // // };

// // // export default Home;
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Menu, MenuItem, IconButton, InputBase } from '@mui/material';
// // import AccountCircle from '@mui/icons-material/AccountCircle';
// // import SearchIcon from '@mui/icons-material/Search';
// // import './Home.css';
// // import logo from './Gemini_Generated_Image_lhq3rrlhq3rrlhq3-removebg.png'; // Import your logo image

// // const Home = () => {
// //   const navItems = [
// //     { name: 'Home', path: '/' },
// //     { name: 'About', path: '/about' },
// //     { name: 'Policies', path: '/policies' },
// //     { name: 'Contact Us', path: '/contact' },
// //     { name: 'Cart', path: '/cart' },
// //   ];

// //   const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
// //   const [productsMenuAnchor, setProductsMenuAnchor] = useState(null);
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const handleAccountMenuOpen = (event) => {
// //     setAccountMenuAnchor(event.currentTarget);
// //   };

// //   const handleAccountMenuClose = () => {
// //     setAccountMenuAnchor(null);
// //   };

// //   const handleProductsMenuOpen = (event) => {
// //     setProductsMenuAnchor(event.currentTarget);
// //   };

// //   const handleProductsMenuClose = () => {
// //     setProductsMenuAnchor(null);
// //   };

// //   const handleSearchChange = (event) => {
// //     setSearchQuery(event.target.value);
// //   };

// //   const handleSearchAction = () => {
// //     console.log('Search action triggered:', searchQuery);
// //   };

// //   return (
// //     <div>
// //       <header>
// //         <nav className='navbar'>
// //           <div className='logo-title'>
// //             <img src={logo} alt="Logo" className='logo' />
// //             <h1 className='title'>LEASE EASE</h1>
// //           </div>
// //           <div className='nav-options'>
// //             <ul className='navopp'>
// //               {navItems.map((item, index) => (
// //                 <li key={index} style={{ cursor: 'pointer', margin: '0 10px' }}>
// //                   <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
// //                     {item.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //               <li onClick={handleProductsMenuOpen} style={{ cursor: 'pointer', margin: '0 10px' }}>
// //                 Products
// //               </li>
// //             </ul>
// //             <div className="search-form">
// //               <IconButton type="button" aria-label="search" onClick={handleSearchAction}>
// //                 <SearchIcon />
// //               </IconButton>
// //               <InputBase
// //                 className="search-input"
// //                 placeholder="Your Wishes Come True Here"
// //                 inputProps={{ 'aria-label': 'search' }}
// //                 value={searchQuery}
// //                 onChange={handleSearchChange}
// //               />
// //             </div>
// //             <IconButton
// //               edge="end"
// //               aria-label="account of current user"
// //               aria-controls="account-menu"
// //               aria-haspopup="true"
// //               onClick={handleAccountMenuOpen}
// //               color="inherit"
// //               style={{ transform: 'scale(1.5)', verticalAlign: 'middle', position: 'relative', marginLeft: '10px' }}
// //             >
// //               <AccountCircle />
// //             </IconButton>
// //           </div>
// //         </nav>
// //       </header>

// //       {/* Account Menu */}
// //       <Menu
// //         id="account-menu"
// //         anchorEl={accountMenuAnchor}
// //         keepMounted
// //         open={Boolean(accountMenuAnchor)}
// //         onClose={handleAccountMenuClose}
// //       >
// //         <MenuItem onClick={handleAccountMenuClose}>
// //           <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
// //         </MenuItem>
// //         <MenuItem onClick={handleAccountMenuClose}>
// //           <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
// //         </MenuItem>
// //       </Menu>

// //       {/* Products Menu */}
// //       <Menu
// //         id="products-menu"
// //         anchorEl={productsMenuAnchor}
// //         keepMounted
// //         open={Boolean(productsMenuAnchor)}
// //         onClose={handleProductsMenuClose}
// //       >
// //         <MenuItem onClick={handleProductsMenuClose}>
// //           <Link to="/product1" style={{ textDecoration: 'none', color: 'inherit' }}>Electronic</Link>
// //         </MenuItem>
// //         <MenuItem onClick={handleProductsMenuClose}>
// //           <Link to="/product2" style={{ textDecoration: 'none', color: 'inherit' }}>Furniture</Link>
// //         </MenuItem>
// //         <MenuItem onClick={handleProductsMenuClose}>
// //           <Link to="/product3" style={{ textDecoration: 'none', color: 'inherit' }}>Home essentials</Link>
// //         </MenuItem>
// //         <MenuItem onClick={handleProductsMenuClose}>
// //           <Link to="/product4" style={{ textDecoration: 'none', color: 'inherit' }}>Mobiles & Lap</Link>
// //         </MenuItem>
// //       </Menu>
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, MenuItem, IconButton, InputBase } from '@mui/material';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import './Home.css';
// import logo from './Gemini_Generated_Image_lhq3rrlhq3rrlhq3-removebg.png'; // Import your logo image

// const Home = () => {
//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Policies', path: '/policies' },
//     { name: 'Contact Us', path: '/contact' },
//     { name: 'Cart', path: '/cart' },
//   ];

//   const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
//   const [productsMenuAnchor, setProductsMenuAnchor] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleAccountMenuOpen = (event) => {
//     setAccountMenuAnchor(event.currentTarget);
//   };

//   const handleAccountMenuClose = () => {
//     setAccountMenuAnchor(null);
//   };

//   const handleProductsMenuOpen = (event) => {
//     setProductsMenuAnchor(event.currentTarget);
//   };

//   const handleProductsMenuClose = () => {
//     setProductsMenuAnchor(null);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchAction = () => {
//     console.log('Search action triggered:', searchQuery);
//   };

//   return (
//     <div>
//       <header>
//         <nav className='navbar'>
//           <div className='logo-title'>
//             <img src={logo} alt="Logo" className='logo' />
//             <h1 className='title'>LEASE EASE</h1>
//           </div>
//           <div className='nav-options'>
//             <ul className='navopp'>
//               {navItems.map((item, index) => (
//                 <li key={index} style={{ cursor: 'pointer', margin: '0 10px' }}>
//                   <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//               <li onClick={handleProductsMenuOpen} style={{ cursor: 'pointer', margin: '0 10px' }}>
//                 Products
//               </li>
//             </ul>
//             <div className="search-form">
//               <IconButton type="button" aria-label="search" onClick={handleSearchAction}>
//                 <SearchIcon />
//               </IconButton>
//               <InputBase
//                 className="search-input"
//                 placeholder="Your Wishes Come True Here"
//                 inputProps={{ 'aria-label': 'search' }}
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//               />
//             </div>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls="account-menu"
//               aria-haspopup="true"
//               onClick={handleAccountMenuOpen}
//               color="inherit"
//               style={{ transform: 'scale(1.5)', verticalAlign: 'middle', position: 'relative', marginLeft: '10px' }}
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>
//         </nav>
//       </header>

//       {/* Account Menu */}
//       <Menu
//         id="account-menu"
//         anchorEl={accountMenuAnchor}
//         keepMounted
//         open={Boolean(accountMenuAnchor)}
//         onClose={handleAccountMenuClose}
//       >
//         <MenuItem onClick={handleAccountMenuClose}>
//           <PersonIcon style={{ marginRight: '10px' }} />
//           <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>My Profile</Link>
//         </MenuItem>
//         <MenuItem onClick={handleAccountMenuClose}>
//           <LockOpenIcon style={{ marginRight: '10px' }} />
//           <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
//         </MenuItem>
//         <MenuItem onClick={handleAccountMenuClose}>
//           <HowToRegIcon style={{ marginRight: '10px' }} />
//           <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
//         </MenuItem>
//       </Menu>

//       {/* Products Menu */}
//       <Menu
//         id="products-menu"
//         anchorEl={productsMenuAnchor}
//         keepMounted
//         open={Boolean(productsMenuAnchor)}
//         onClose={handleProductsMenuClose}
//       >
//         <MenuItem onClick={handleProductsMenuClose}>
//           <Link to="/product1" style={{ textDecoration: 'none', color: 'inherit' }}>Electronic</Link>
//         </MenuItem>
//         <MenuItem onClick={handleProductsMenuClose}>
//           <Link to="/product2" style={{ textDecoration: 'none', color: 'inherit' }}>Furniture</Link>
//         </MenuItem>
//         <MenuItem onClick={handleProductsMenuClose}>
//           <Link to="/product3" style={{ textDecoration: 'none', color: 'inherit' }}>Home essentials</Link>
//         </MenuItem>
//         <MenuItem onClick={handleProductsMenuClose}>
//           <Link to="/product4" style={{ textDecoration: 'none', color: 'inherit' }}>Mobiles & Lap</Link>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// };

// export default Home;



import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, MenuItem, IconButton, InputBase } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import './Home.css';
import logo from './Gemini_Generated_Image.png';
import { ProductContext } from './ProductContext'; // Assuming you have a context for products

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
  const [searchQuery, setSearchQuery] = useState('');
  const { allProducts } = useContext(ProductContext); // Access products from context
  const navigate = useNavigate();

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchAction = () => {
    // Redirect to the search results page
    navigate('/search', { state: { query: searchQuery } });
  };

  return (
    <div>
      <header>
        <nav className='navbar'>
          <div className='logo-title'>
            <img src={logo} alt="Logo" className='logo' />
            <h1 className='title'>LEASE EASE</h1>
          </div>
          <div className='nav-options'>
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
            </ul>
            <div className="search-form">
              <IconButton type="button" aria-label="search" onClick={handleSearchAction}>
                <SearchIcon />
              </IconButton>
              <InputBase
                className="search-input"
                placeholder="Your Wishes Come True Here"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="account-menu"
              aria-haspopup="true"
              onClick={handleAccountMenuOpen}
              color="inherit"
              style={{ transform: 'scale(1.5)', verticalAlign: 'middle', position: 'relative', marginLeft: '10px' }}
            >
              <AccountCircle />
            </IconButton>
          </div>
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
          <PersonIcon style={{ marginRight: '10px' }} />
          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>My Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleAccountMenuClose}>
          <LockOpenIcon style={{ marginRight: '10px' }} />
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
        </MenuItem>
        <MenuItem onClick={handleAccountMenuClose}>
          <HowToRegIcon style={{ marginRight: '10px' }} />
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
          <Link to="/product1" style={{ textDecoration: 'none', color: 'inherit' }}>Electronic</Link>
        </MenuItem>
        <MenuItem onClick={handleProductsMenuClose}>
          <Link to="/product2" style={{ textDecoration: 'none', color: 'inherit' }}>Furniture</Link>
        </MenuItem>
        <MenuItem onClick={handleProductsMenuClose}>
          <Link to="/product3" style={{ textDecoration: 'none', color: 'inherit' }}>Home essentials</Link>
        </MenuItem>
        <MenuItem onClick={handleProductsMenuClose}>
          <Link to="/product4" style={{ textDecoration: 'none', color: 'inherit' }}>Mobiles & Lap</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Home;
