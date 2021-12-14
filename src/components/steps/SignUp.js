import * as React from 'react';
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {BlockSharp, Send,  Visibility, VisibilityOff} from "@mui/icons-material";

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css'
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import useForm from "../useForm";


const SignUp = ({ activeStep, steps, handleNext }) => {

    const stateSchema = {
        firstName: {value: "", error: ""},
        lastName: {value: "", error: ""},
        email: {value: "", error: ""},
        phone: {value: "", error: ""},
        password: {value: "", error: ""},
        passwordConfirm: {value: "", error: ""}
    }

    const stateValidatorSchema = {
        firstName: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: "First name must be more than 1 characters"
            }
        },
        lastName: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: "Last name must be more than 3 characters"
            }
        },
        email: {
            required: true,
            validator: {
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error: "Invalid Email Address"
            }
        },
        password: {
            required: true,
            validator: {
                func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error: "Minimum 6 Characters and at least one special character /%$3.=)&@* "
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {firstName, lastName, email, password, passwordConfirm} = values


    const [showPasswordValues, setShowPasswordValues] = useState({showPassword: false});
    const [showPasswordConfirmValues, setShowPasswordConfirmValues] = useState({showPasswordConfirm: false});


    const handleClickShowPassword = () => {
        setShowPasswordValues({showPassword: !showPasswordValues.showPassword});
    };

    const handleClickShowPasswordConfirm = () => {
        setShowPasswordConfirmValues({showPasswordConfirm: !showPasswordConfirmValues.showPasswordConfirm});
    };


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
        <Container maxWidth="md">
            <Box
            >
                <Typography sx={{textAlign: "center", textTransform: "uppercase"}} component="h1" variant="h5"
                            gutterBottom>
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <TextField
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={handleOnChange}

                            />
                            {errors.firstName && dirty.firstName && (
                                <Typography variant={"p"} sx={{color: "red", fontWeight: "200"}}>
                                    {errors.firstName}
                                </Typography>)}
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <TextField
                                required
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={handleOnChange}
                            />
                            {errors.lastName && dirty.lastName && (
                                <Typography variant={"p"} sx={{color: "red", fontWeight: "200"}}>
                                    {errors.lastName}
                                </Typography>)}
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <TextField
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                            />
                            {errors.email && dirty.email && (
                                <Typography sx={{color: "red", fontWeight: "200"}}>
                                    {errors.email}
                                </Typography>)}
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <IntlTelInput
                                preferredCountries={['se']}
                                containerClassName="intl-tel-input"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <FormControl variant="outlined" sx={{width: "100%"}}>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    name="password"
                                    onChange={handleOnChange}
                                    type={showPasswordValues.showPassword ? 'text' : 'password'}
                                    value={showPasswordValues.password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPasswordValues.showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            {errors.password && dirty.password && (
                                <Typography sx={{color: "red", fontWeight: "200"}}>
                                    {errors.password}
                                </Typography>)}
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <FormControl variant="outlined" sx={{width: "100%"}}>
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPasswordConfirmValues.showPasswordConfirm ? 'text' : 'password'}
                                    value={showPasswordValues.showPasswordConfirm}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPasswordConfirm}
                                                edge="end"
                                            >
                                                {showPasswordConfirmValues.showPasswordConfirm ? <VisibilityOff/> :
                                                    <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Confirm Password"
                                    name="passwordConfirm"
                                    onChange={handleOnChange}
                                />
                            </FormControl>
                            {passwordConfirm !== password ? (
                                <Typography sx={{color: "red", fontWeight: "400"}}>
                                    Passwords do not match
                                </Typography>
                            ) : null}
                        </Grid>
                    </Grid>
                    {
                        !firstName ||
                        !lastName ||
                        !email ||
                        !password ||
                        !passwordConfirm || passwordConfirm !== password ? (
                            <Button
                                disabled
                                onClick={handleNext}
                                sx={{mt: 3, mb: 2}} variant={"outlined"} endIcon={<BlockSharp/>}>
                                {activeStep === steps.length ? "Finnish" : "Sign Up"}
                            </Button>
                        ) : (
                            <Button
                                sx={{mt: 3, mb: 2}}
                                variant={"outlined"}
                                onClick={handleNext}
                                endIcon={<Send/>}>
                                {activeStep === steps.length ? "Finnish" : "Sign Up"}
                            </Button>)
                    }
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;