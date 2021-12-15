import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Container, Divider} from "@mui/material";
import {Undo} from "@mui/icons-material";
import Button from "@mui/material/Button";

const Confirm = ({activeStep, steps, handlePrevious, values}) => {

    const {
        firstName,
        lastName,
        email,
        phone,
        purpose,
        initialContribution,
        loanAmount,
        loanTerm,
        familyName,
        physicalAddress,
        state,
        postalCode,
        country
    } = values


    return (
        <Container maxWidth="md" sx={{marginTop: "2rem", marginBottom: "2rem"}}>
            <Grid container spacing={2}>
                <Container sx={{margin: "2rem 0.5rem"}}>
                    <Divider>
                        <Typography variant="h5" gutterBottom>
                            MORTGAGE
                        </Typography>
                    </Divider>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Purpose of the loan<br/>
                                    <span style={{color: "grey"}}>{purpose}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Loan term<br/>
                                    <span style={{color: "grey"}}>{loanTerm}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Loan Amount <br/>
                                    <span style={{color: "grey"}}>{loanAmount}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={12} md={12} sm={12}>
                                <Typography variant="h6">
                                    How much will you pay for the initial contribution?<br/>
                                    <span style={{color: "grey"}}>{initialContribution}</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Container sx={{margin: "2rem 0.5rem"}}>
                    <Divider>
                        <Typography variant="h5" gutterBottom>
                            PERSONAL DETAILS
                        </Typography>
                    </Divider>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    First Name<br/>
                                    <span style={{color: "grey"}}>{firstName}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Family Name<br/>
                                    <span style={{color: "grey"}}>{familyName}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Last Name <br/>
                                    <span style={{color: "grey"}}>{lastName}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Email Address <br/>
                                    <span style={{color: "grey"}}>{email}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Phone <br/>
                                    <span style={{color: "grey"}}>{phone}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Country <br/>
                                    <span style={{color: "grey"}}>{country}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Home Address <br/>
                                    <span style={{color: "grey"}}>{physicalAddress}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Postal Code <br/>
                                    <span style={{color: "grey"}}>{postalCode}</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    State <br/>
                                    <span style={{color: "grey"}}>{state}</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button
                        sx={{mt: 3, mb: 2}}
                        variant={"contained"}
                        onClick={handlePrevious}
                        endIcon={<Undo/>}>
                        {activeStep === steps.length ? "Finnish" : "Go Back"}
                    </Button>
                </Container>
            </Grid>
        </Container>
    );
}

export default Confirm;