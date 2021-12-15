import * as React from 'react';
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {BlockSharp, Send, Undo} from "@mui/icons-material";
import 'react-intl-tel-input/dist/main.css'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import useForm from "../useForm";


const MortgagePlan = ({ activeStep, steps, handleNext, handlePrevious }) => {

    const years= () => {
        let total_years = []
        for (let i = 1; i <= 30; i++){
            total_years.push(i)
        }
        return total_years;
    }
    const loan_terms = years();


    const stateSchema = {
        purpose: {value: "", error: ""},
        initialContribution: {value: "", error: ""},
        loanAmount: {value: "", error: ""}
    }

    const stateValidatorSchema = {
        purpose: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error: "Must be more than 3 characters"
            }
        },
        initialContribution: {
            required: true,
            validator: {
                func: value => /^\d+$/.test(value),
                error: " characters must be more than 1 "
            }
        },
        loanAmount: {
            required: true,
            validator: {
                func: value => /^\d+$/.test(value),
                error: "Amount must be more than 1 characters"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {purpose, initialContribution, loanAmount, loanTerm} = values



    return (
        <Container maxWidth="md">
            <Box
            >
                <Typography sx={{textAlign: "center", textTransform: "uppercase"}} component="h1" variant="h5"
                            gutterBottom>
                    Mortgage Plan
                </Typography>
                <Box sx={{mt: 3}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <FormControl fullWidth required>
                                <InputLabel id="demo-controlled-open-select-label">Purpose of the loan</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    label="Purpose of the loan"
                                        name="purpose"
                                        value={purpose}
                                        onChange={handleOnChange}
                                >
                                    <MenuItem value="forHousingPurchase">For housing purchase</MenuItem>
                                    <MenuItem value="buyingHome">Buying a home (consultation on borrowing
                                        opportunities)</MenuItem>
                                    <MenuItem value="houseConstruction">For house construction</MenuItem>
                                    <MenuItem value="purchasePlot">For the purchase of a plot of land</MenuItem>
                                    <MenuItem value="homeExchange">Home exchange</MenuItem>
                                    <MenuItem value="homeRepairRenovation">For home repair or renovation</MenuItem>
                                    <MenuItem value="amendmentsLoanAgreement">Amendments to the loan agreement</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                            {errors.purpose && dirty.purpose && (
                                <Typography variant={"p"} sx={{color: "red", fontWeight: "200"}}>
                                    {errors.purpose}
                                </Typography>)}
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <FormControl fullWidth required>
                                <InputLabel id="demo-controlled-open-select-label">Loan term</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    label="Loan term"
                                    name="loanTerm"
                                    value={loanTerm}
                                    onChange={handleOnChange}
                                >
                                    {
                                        loan_terms.map((t) => (
                                            <MenuItem key={t} value={t}>{t} Years</MenuItem>
                                        ))
                                    }

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextField
                                required
                                fullWidth
                                label="How much will you pay for the initial contribution?"
                                name="initialContribution"
                                value={initialContribution}
                                onChange={handleOnChange}
                            />
                            {errors.initialContribution && dirty.initialContribution && (
                                <Typography sx={{color: "red", fontWeight: "200"}}>
                                    {errors.initialContribution}
                                </Typography>)}
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextField
                                required
                                fullWidth
                                label="Loan Amount"
                                name="loanAmount"
                                value={loanAmount}
                                onChange={handleOnChange}
                            />
                            {errors.loanAmount && dirty.loanAmount && (
                                <Typography sx={{color: "red", fontWeight: "200"}}>
                                    {errors.loanAmount}
                                </Typography>)}
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item>
                            {
                                !purpose ||
                                !loanTerm ||
                                !initialContribution ||
                                !loanAmount ? (
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

export default MortgagePlan;