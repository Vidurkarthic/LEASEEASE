// import React, { useContext } from 'react';
// import {
//     Container,
//     Card,
//     CardContent,
//     Button,
//     Typography,
//     Grid,
//     Avatar,
//     List,
//     ListItem,
//     ListItemText,
//     Divider,
// } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import OrderIcon from '@mui/icons-material/ShoppingCart';
// import LogoutIcon from '@mui/icons-material/Logout';
// import AccountIcon from '@mui/icons-material/AccountCircle';
// import { UserContext } from './UserContext';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useNavigate } from 'react-router-dom';

// const ProfilePage = () => {
//     const { user,logout } = useContext(UserContext);
//     const navigate = useNavigate();
//     const handleLogout = () => {
//         logout();
//         navigate('/'); 
//     };

//     if (!user) {
//         return <div>Loading...</div>;
//     }
//     return (
//         <Container maxWidth="md" style={{ marginTop: '2rem' }}>
//             <Card>
//                 <CardContent>
//                     <Grid container spacing={2} alignItems="center">
//                         <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
//                             <Avatar sx={{ width: 80, height: 80, margin: 'auto' }}>
//                                 <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
//                             </Avatar>
//                         </Grid>
//                         <Grid item xs={12} md={9}>
//                             <Typography variant="h5" component="div" gutterBottom>
//                                 {user.firstName} {user.lastName}
//                             </Typography>
//                             <Typography variant="subtitle1" color="textSecondary" gutterBottom>
//                                 {user.email}
//                             </Typography>
                            
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 startIcon={<EditIcon />}
//                                 style={{ marginTop: '1rem' }}
//                             >
//                                 Edit Profile
//                             </Button>
//                         </Grid>
//                     </Grid>
//                     <Divider style={{ margin: '2rem 0' }} />
//                     <Typography variant="h6" gutterBottom>
//                         Recent Orders
//                     </Typography>
//                     <List>
//                         <ListItem>
//                             <OrderIcon style={{ marginRight: '1rem' }} />
//                             <ListItemText
//                                 primary="Order #1234"
//                                 secondary="Placed on January 1, 2024"
//                             />
//                         </ListItem>
//                         <ListItem>
//                             <OrderIcon style={{ marginRight: '1rem' }} />
//                             <ListItemText
//                                 primary="Order #5678"
//                                 secondary="Placed on February 15, 2024"
//                             />
//                         </ListItem>
//                     </List>
//                     <Divider style={{ margin: '2rem 0' }} />
//                     <Typography variant="h6" gutterBottom>
//                         Account Settings
//                     </Typography>
//                     <List>
//                         <ListItem>
//                             <AccountIcon style={{ marginRight: '1rem' }} />
//                             <ListItemText primary="Update Email" />
//                         </ListItem>
//                         <ListItem>
//                             <AccountIcon style={{ marginRight: '1rem' }} />
//                             <ListItemText primary="Change Password" />
//                         </ListItem>
//                     </List>
//                     <Divider style={{ margin: '2rem 0' }} />

//                     <Grid container justifyContent="flex-end">
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             startIcon={<LogoutIcon />}
//                             onClick={handleLogout}
//                         >
//                             Logout
//                         </Button>
//                     </Grid>
//                 </CardContent>
//             </Card>
//         </Container>
//     );
// };

// export default ProfilePage;


// import React, { useContext, useState } from 'react';
// import {
//   Container,
//   Card,
//   CardContent,
//   Button,
//   Typography,
//   Grid,
//   Avatar,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   IconButton,
// } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import OrderIcon from '@mui/icons-material/ShoppingCart';
// import LogoutIcon from '@mui/icons-material/Logout';
// import AccountIcon from '@mui/icons-material/AccountCircle';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { UserContext } from './UserContext';
// import { useNavigate } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const ProfilePage = () => {
//   const { user, logout } = useContext(UserContext);
//   const [darkMode, setDarkMode] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const handleThemeToggle = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   // Create themes
//   const lightTheme = createTheme({
//     palette: {
//       mode: 'light',
//       primary: {
//         main: '#1976d2',
//       },
//       background: {
//         default: '#f0f0f0',
//         paper: '#ffffff',
//       },
//     },
//   });

//   const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//       primary: {
//         main: '#90caf9',
//       },
//       background: {
//         default: '#121212',
//         paper: '#1d1d1d',
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <Container maxWidth="md" style={{ marginTop: '2rem' }}>
//         <Card>
//           <CardContent>
//             <Grid container spacing={2} alignItems="center">
//               <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
//                 <Avatar sx={{ width: 80, height: 80, margin: 'auto' }}>
//                   <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
//                 </Avatar>
//               </Grid>
//               <Grid item xs={12} md={9}>
//                 <Grid container justifyContent="space-between" alignItems="center">
//                   <Grid item>
//                     <Typography variant="h5" component="div" gutterBottom>
//                       {user.firstName} {user.lastName}
//                     </Typography>
//                     <Typography variant="subtitle1" color="textSecondary" gutterBottom>
//                       {user.email}
//                     </Typography>
//                   </Grid>
//                   <Grid item>
//                     <IconButton onClick={handleThemeToggle}>
//                       {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//                     </IconButton>
//                   </Grid>
//                 </Grid>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   startIcon={<EditIcon />}
//                   style={{ marginTop: '1rem' }}
//                 >
//                   Edit Profile
//                 </Button>
//               </Grid>
//             </Grid>
//             <Divider style={{ margin: '2rem 0' }} />
//             <Typography variant="h6" gutterBottom>
//               Recent Orders
//             </Typography>
//             <List>
//               <ListItem>
//                 <OrderIcon style={{ marginRight: '1rem' }} />
//                 <ListItemText primary="Order #1234" secondary="Placed on January 1, 2024" />
//               </ListItem>
//               <ListItem>
//                 <OrderIcon style={{ marginRight: '1rem' }} />
//                 <ListItemText primary="Order #5678" secondary="Placed on February 15, 2024" />
//               </ListItem>
//             </List>
//             <Divider style={{ margin: '2rem 0' }} />
//             <Typography variant="h6" gutterBottom>
//               Account Settings
//             </Typography>
//             <List>
//               <ListItem>
//                 <AccountIcon style={{ marginRight: '1rem' }} />
//                 <ListItemText primary="Update Email" />
//               </ListItem>
//               <ListItem>
//                 <AccountIcon style={{ marginRight: '1rem' }} />
//                 <ListItemText primary="Change Password" />
//               </ListItem>
//             </List>
//             <Divider style={{ margin: '2rem 0' }} />
//             <Grid container justifyContent="flex-end">
//               <Button
//                 variant="contained"
//                 color="primary"
//                 startIcon={<LogoutIcon />}
//                 onClick={handleLogout}
//               >
//                 Logout
//               </Button>
//             </Grid>
//           </CardContent>
//         </Card>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default ProfilePage;


import React, { useContext, useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import OrderIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountIcon from '@mui/icons-material/AccountCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import Footer from './Footer';

const ProfilePage = () => {
  const { user, logout } = useContext(UserContext);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Create themes
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: '#f0f0f0',
        paper: '#ffffff',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      background: {
        default: '#121212',
        paper: '#1d1d1d',
      },
    },
  });

  if (!user) {
    return <></>;
  }

  return (
      <div className='prof' style={{backgroundColor:'#cccbca'}}>
        <Home></Home>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Card>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 80, height: 80, margin: 'auto' }}>
                  <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
                </Avatar>
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="h5" component="div" gutterBottom>
                      {user.firstName} {user.lastName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      {user.email}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={handleThemeToggle}>
                      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<EditIcon />}
                  style={{ marginTop: '1rem' }}
                >
                  Edit Profile
                </Button>
              </Grid>
            </Grid>
            <Divider style={{ margin: '2rem 0' }} />
            <Typography variant="h6" gutterBottom>
              Recent Orders
            </Typography>
            <List>
              <ListItem>
                <OrderIcon style={{ marginRight: '1rem' }} />
                <ListItemText primary="Order #1234" secondary="Placed on January 1, 2024" />
              </ListItem>
              <ListItem>
                <OrderIcon style={{ marginRight: '1rem' }} />
                <ListItemText primary="Order #5678" secondary="Placed on February 15, 2024" />
              </ListItem>
            </List>
            <Divider style={{ margin: '2rem 0' }} />
            <Typography variant="h6" gutterBottom>
              Account Settings
            </Typography>
            <List>
              <ListItem>
                <AccountIcon style={{ marginRight: '1rem' }} />
                <ListItemText primary="Update Email" />
              </ListItem>
              <ListItem>
                <AccountIcon style={{ marginRight: '1rem' }} />
                <ListItemText primary="Change Password" />
              </ListItem>
            </List>
            <Divider style={{ margin: '2rem 0' }} />
            <Grid container justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
    <Footer></Footer>
    </div>
  );
};

export default ProfilePage;
