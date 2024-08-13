// import * as React from 'react';
// import { useState } from 'react';
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
// import './Style.css';
// import { useNavigate } from 'react-router-dom';

// import Home from './Home';

// const defaultTheme = createTheme();

// export default function SignUp() {
//     const navigate = useNavigate();
//     const [details, setDetails] = useState(
//         {
//             "firstName": "",
//             "lastName": "",
//             "email": "",
//             "password": ""
//         }
//     )
//     const insert = (event) => {

//         setDetails({ ...details, [event.target.name]: event.target.value })


//     }
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const { firstName, lastName, email, password } = details;

//         const customer = { firstName, lastName, email, password };
//         console.log(customer);

//         fetch("http://localhost:8080/postCustomer", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(customer)
//         }).then(() => {
//             console.log("New customer Added")
//             setDetails({
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 password: ""
//             });
//             navigate('/login')
//         })


//     };

//     return (
//         <div className='total'>
//             <Home />
//             <ThemeProvider theme={defaultTheme}>
//                 <Container component="main" maxWidth="xs" className='userContainer'>
//                     <CssBaseline />
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'black' }}>
//                             <LockOutlinedIcon />
//                         </Avatar>
//                         <Typography component="h1" variant="h5">
//                             Sign up
//                         </Typography>
//                         <Box component="form" noValidate
//                             onSubmit={handleSubmit}
//                             sx={{ mt: 3 }}>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         autoComplete="given-name"
//                                         name="firstName"
//                                         required
//                                         fullWidth
//                                         id="firstName"
//                                         value={details.firstName}
//                                         label="First Name"
//                                         autoFocus
//                                         onChange={insert}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         id="lastName"
//                                         label="Last Name"
//                                         name="lastName"
//                                         value={details.lastName}
//                                         autoComplete="family-name"
//                                         onChange={insert}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         id="email"
//                                         label="Email Address"
//                                         name="email"
//                                         value={details.email}
//                                         autoComplete="email"
//                                         onChange={insert}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         name="password"
//                                         label="Password"
//                                         type="password"
//                                         id="password"
//                                         value={details.password}
//                                         autoComplete="new-password"
//                                         onChange={insert}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <FormControlLabel
//                                         control={<Checkbox value="allowExtraEmails" color="primary" />}
//                                         label="Hereby I allow to send updates via email"
//                                     />
//                                 </Grid>
//                             </Grid>
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                             >
//                                 Sign Up
//                             </Button>
//                             <Grid container justifyContent="flex-end">
//                                 <Grid item>
//                                     <Link href="/login" variant="body2">
//                                         Already have an account? Sign in
//                                     </Link>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </Box>
//                 </Container>
//             </ThemeProvider>
//         </div>
//     );
// }

import React, { useState } from 'react';
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
import './Style.css';

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const insert = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const validateEmail = (email) => {
    // Basic email format validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = details;

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    const customer = { firstName, lastName, email, password };

    try {
      const response = await fetch("http://localhost:8080/postCustomer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer)
      });

      if (response.ok) {
        setSuccess(true);
        setError("");
        setDetails({ firstName: "", lastName: "", email: "", password: "" });
        navigate('/login');
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className='total'>
      <Home />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className='userContainer'>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    value={details.firstName}
                    label="First Name"
                    autoFocus
                    onChange={insert}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={details.lastName}
                    autoComplete="family-name"
                    onChange={insert}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={details.email}
                    autoComplete="email"
                    onChange={insert}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={details.password}
                    autoComplete="new-password"
                    onChange={insert}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Hereby I allow to send updates via email"
                  />
                </Grid>
              </Grid>
              <Box sx={{ color: 'red', textAlign: 'center', mt: 2 }}>
                {error}
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
