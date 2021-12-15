import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {BlockSharp, Send} from "@mui/icons-material";

import 'react-intl-tel-input/dist/main.css'
import useForm from "../useForm";


const PersonalDetails = ({ activeStep, steps, handleNext }) => {


    const stateSchema = {
        firstName: {value: "", error: ""},
        sirName: {value: "", error: ""},
        physicalAddress: {value: "", error: ""},
        state: {value: "", error: ""},
        postalCode: {value: "", error: ""},
        country: {value: "", error: ""}
    }

    const stateValidatorSchema = {
        firstName: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: "First name must be more than 3 characters"
            }
        },
        sirName: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: "Sirname must be more than 3 characters"
            }
        },
        physicalAddress: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: "Address must be more than 3 characters"
            }
        },
        state: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: "State must be more than 4 characters"
            }
        },
        postalCode: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: "First name must be more than 1 characters"
            }
        },
        country: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: "Country must be more than 4 characters"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {firstName, sirName, physicalAddress, state, postalCode, country} = values



    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
    };

    return (
        <Container maxWidth="md">
            <Box
            >
                <Typography sx={{textAlign: "center", textTransform: "uppercase"}} component="h1" variant="h5"
                            gutterBottom>
                    Personal Information
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
                                label="Family Name"
                                name="sirName"
                                value={sirName}
                                onChange={handleOnChange}
                            />
                            {errors.sirName && dirty.sirName && (
                                <Typography variant={"p"} sx={{color: "red", fontWeight: "200"}}>
                                    {errors.sirName}
                                </Typography>)}
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <TextField
                                required
                                fullWidth
                                label="Physical Address"
                                name="physicalAddress"
                                value={physicalAddress}
                                onChange={handleOnChange}
                            />
                            {errors.physicalAddress && dirty.physicalAddress && (
                                <Typography sx={{color: "red", fontWeight: "200"}}>
                                    {errors.physicalAddress}
                                </Typography>)}
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <TextField
                                required
                                fullWidth
                                label="State/Province/Region"
                                name="state"
                                value={state}
                                onChange={handleOnChange}
                            />
                            {errors.state && dirty.state && (
                                <Typography sx={{color: "red", fontWeight: "200"}}>
                                    {errors.state}
                                </Typography>)}
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <TextField
                                required
                                fullWidth
                                label="postalCode"
                                name="postalCode"
                                value={postalCode}
                                onChange={handleOnChange}
                            />
                            {errors.postalCode && dirty.postalCode && (
                                <Typography sx={{color: "red", fontWeight: "200"}}>
                                    {errors.postalCode}
                                </Typography>)}
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <TextField
                                required
                                fullWidth
                                label="country"
                                name="country"
                                value={country}
                                onChange={handleOnChange}
                            />
                            {errors.country && dirty.country && (
                                <Typography sx={{color: "red", fontWeight: "200"}}>
                                    {errors.country}
                                </Typography>)}
                        </Grid>
                    </Grid>
                    {
                        !firstName ||
                        !sirName ||
                        !physicalAddress ||
                        !state ||
                        !country || postalCode ? (
                            <Button
                                disabled
                                onClick={handleNext}
                                sx={{mt: 3, mb: 2}} variant={"outlined"} endIcon={<BlockSharp/>}>
                                {activeStep === steps.length ? "Finnish" : "Next"}
                            </Button>
                        ) : (
                            <Button
                                sx={{mt: 3, mb: 2}}
                                variant={"outlined"}
                                onClick={handleNext}
                                endIcon={<Send/>}>
                                {activeStep === steps.length ? "Finnish" : "Next"}
                            </Button>)
                    }
                </Box>
            </Box>
        </Container>
    );
}

export default PersonalDetails;