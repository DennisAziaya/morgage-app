import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {BlockSharp, Send, Undo} from "@mui/icons-material";

import 'react-intl-tel-input/dist/main.css'
import useForm from "../useForm";


const PersonalDetails = ({ activeStep, steps, handleNext, handlePrevious }) => {


    const stateSchema = {
        firstName: {value: "", error: ""},
        familyName: {value: "", error: ""},
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
        familyName: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: "Family Name must be more than 3 characters"
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
                error: "State must be more than 5 characters"
            }
        },
        postalCode: {
            required: true,
            validator: {
                func: value => /^\d+$/.test(value),
                error: "First name must be more than 1 characters"
            }
        },
        country: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: "Country must be more than 3 characters"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {firstName, familyName, physicalAddress, state, postalCode, country} = values



    return (
        <Container maxWidth="md">
            <Box
            >
                <Typography sx={{textAlign: "center", textTransform: "uppercase"}} component="h1" variant="h5"
                            gutterBottom>
                    Personal Information
                </Typography>
                <Box sx={{mt: 3}}>
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
                                name="familyName"
                                value={familyName}
                                onChange={handleOnChange}
                            />
                            {errors.familyName && dirty.familyName && (
                                <Typography variant={"p"} sx={{color: "red", fontWeight: "200"}}>
                                    {errors.familyName}
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
                                label="Postal Code"
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
                    <Grid container spacing={2}>
                        <Grid item>
                            {
                                !firstName ||
                                !familyName ||
                                !physicalAddress ||
                                !state ||
                                !country || !postalCode ? (
                                    <Button
                                        disabled
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
                        </Grid>
                        <Grid item>
                            <Button
                                sx={{mt: 3, mb: 2}}
                                variant={"outlined"}
                                onClick={handlePrevious}
                                endIcon={<Undo/>}>
                                {activeStep === steps.length ? "Finnish" : "Go Back"}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default PersonalDetails;