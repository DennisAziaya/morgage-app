import * as React from 'react';
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
import {Menu, Visibility, VisibilityOff} from "@mui/icons-material";

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css'
import {makeStyles} from "@mui/styles";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {useState} from "react";


const theme = createTheme();

const useStyles = makeStyles((theme) =>({
    phoneInput : {
        height : "100%",
        width : "100%"
    }
}))

const SignUp = () => {

    const [showPasswordValues, setShowPasswordValues] = useState({showPassword : false});
    const [showPasswordConfirmValues, setShowPasswordConfirmValues] = useState({showPasswordConfirm : false});



    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    const handleClickShowPassword = () => {
        setShowPasswordValues({showPassword: !showPasswordValues.showPassword});
    };

    const handleClickShowPasswordConfirm = () => {
        setShowPasswordConfirmValues({showPasswordConfirm: !showPasswordConfirmValues.showPasswordConfirm});
    };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    //const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                {/*<CssBaseline />*/}
                <Box
                >
                    <Typography sx={{textAlign : "center", textTransform : "uppercase"}} component="h1" variant="h5" gutterBottom>
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                <IntlTelInput
                                    preferredCountries={['se']}
                                    containerClassName="intl-tel-input"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                <FormControl variant="outlined" sx={{ width : "100%" }}>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPasswordValues.showPassword ? 'text' : 'password'}
                                        value={showPasswordValues.password}
                                        //onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    //onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPasswordValues.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                <FormControl variant="outlined" sx={{ width : "100%" }}>
                                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPasswordConfirmValues.showPasswordConfirm ? 'text' : 'password'}
                                        value={showPasswordValues.showPasswordConfirm}
                                        //onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPasswordConfirm}
                                                    //onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPasswordConfirmValues.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Confirm Password"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;