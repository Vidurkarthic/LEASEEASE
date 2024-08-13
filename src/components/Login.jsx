// // src/components/Login/Login.jsx
// import React, { useState, useContext } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import Home from './Home';
// import { UserContext } from './UserContext'; // Corrected import path
// import './Style.css';

// const defaultTheme = createTheme();
// let username = "Naveen";

// export default function Login() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   });
//   const { login } = useContext(UserContext);
//   const [customers, setCustomers] = useState([]);
//   const [loginMessage, setLoginMessage] = useState("");
//   const [success, setSuccess] = useState(true);

//   const addUser = (event) => {
//     setSuccess(true);
//     setUser({ ...user, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     fetch("http://localhost:8080/getCustomers")
//       .then(res => res.json())
//       .then((result) => {
//         setCustomers(result);
//       });

//     const { email, password } = user;
//     const loggedInCustomer = customers.find(
//       (customer) => customer.email === email && customer.password === password
//     );

//     if (loggedInCustomer) {
//       setSuccess(true);
//       setLoginMessage("Login successful!");
//       login(loggedInCustomer);
//       navigate('/');
//     } else {
//       setSuccess(false);
//       setLoginMessage("Invalid email or password.");
//     }
//   };

//   return (
//     <div className='total'>
//       <Home />
//       <ThemeProvider theme={defaultTheme}>
//         <Container component="main" maxWidth="xs" className='userContainer'>
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 2,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'black' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Login
//             </Typography>
//             <Box component="form"
//               onSubmit={handleSubmit}
//               noValidate sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 onChange={addUser}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 style={{ backgroundColor: 'white' }}
//                 onChange={addUser}
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Box sx={{ textAlign: 'center', color: success ? 'green' : 'red', my: 2 }}>
//                 {loginMessage}
//               </Box>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Typography>
//                     Don't have an account?{' '}
//                     <Link href="/register" variant="body2">
//                       SignUp
//                     </Link>
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Container>
//       </ThemeProvider>
//     </div>
//   );
// }

// export { username };

// src/components/Login/Login.jsx
import React, { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import { UserContext } from './UserContext';
import './Style.css';

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const { login } = useContext(UserContext);
  const [loginMessage, setLoginMessage] = useState("");
  const [success, setSuccess] = useState(true);

  const addUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;

    fetch(`http://localhost:8080/getCustomerByEmail/${email}`)
      .then(res => res.json())
      .then((customer) => {
        if (customer && customer.password === password) {
          setSuccess(true);
          setLoginMessage("Login successful!");
          login(customer);
          navigate('/');
        } else {
          setSuccess(false);
          setLoginMessage("Invalid email or password.");
        }
      })
      .catch(() => {
        setSuccess(false);
        setLoginMessage("Login failed. Please try again.");
      });
  };

  return (
    <div className='total'>
      <Home />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className='userContainer'>
          <CssBaseline />
          <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">Login</Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={addUser}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ backgroundColor: 'white' }}
                onChange={addUser}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Box sx={{ textAlign: 'center', color: success ? 'green' : 'red', my: 2 }}>
                {loginMessage}
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Typography>
                    Don't have an account?{' '}
                    <Link href="/register" variant="body2">Sign Up</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
