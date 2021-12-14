import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select} from "@mui/material";
import {AccountCircle, HelpSharp} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const Plan = (props) => {
    function handleSubmit() {

    }

    const years= () => {
        let total_years = []
        for (let i = 1; i <= 30; i++){
            total_years.push(i)
        }
        return total_years;
    }
    const loan_terms = years();

    return (
        <Container maxWidth="md">
            {/*<CssBaseline />*/}
            <Box
                // sx={{
                //     marginTop: 8,
                //     display: 'flex',
                //     flexDirection: 'column',
                //     alignItems: 'center',
                // }}
            >
                <Typography sx={{textAlign: "center", textTransform: "uppercase"}} component="h1" variant="h5"
                            gutterBottom>
                    Plan
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <FormControl fullWidth required>
                                <InputLabel id="demo-controlled-open-select-label">Purpose of the loan</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    label="Purpose of the loan"
                                >
                                    <MenuItem value={10}>For housing purchase</MenuItem>
                                    <MenuItem value={10}>Buying a home (consultation on borrowing
                                        opportunities)</MenuItem>
                                    <MenuItem value={10}>For house construction</MenuItem>
                                    <MenuItem value={10}>For the purchase of a plot of land</MenuItem>
                                    <MenuItem value={10}>Home exchange</MenuItem>
                                    <MenuItem value={10}>For home repair or renovation</MenuItem>
                                    <MenuItem value={10}>Other</MenuItem>
                                    <MenuItem value={10}>Amendments to the loan agreement</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <FormControl fullWidth required>
                                <InputLabel id="demo-controlled-open-select-label">Loan term</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    label="Loan term"
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
                                id="lastName"
                                label="How much will you pay for the initial contribution?"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Loan amount"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Plan;

