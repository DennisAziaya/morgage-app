import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Container, Divider} from "@mui/material";

const Confirm = () => {
    return (
        <Container maxWidth="md" sx={{ marginTop : "2rem", marginBottom : "2rem" }}>
            <Grid container spacing={2}>
                <Container sx={{margin : "2rem 0.5rem"}}>
                        <Divider>
                            <Typography variant="h5" gutterBottom>
                                MORTGAGE
                            </Typography>
                        </Divider>
                    <Grid item xs={12} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Purpose of the loan<br/>
                                    <span style={{color: "grey" }}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Loan term<br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Loan Amount <br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Container sx={{margin : "2rem 0.5rem"}}>
                        <Divider>
                            <Typography variant="h5" gutterBottom>
                                PERSONAL DETAILS
                            </Typography>
                        </Divider>
                    <Grid item xs={12} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    First Name<br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Family Name<br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Last Name <br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Email Address <br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Phone <br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Country <br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Home Address <br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    Postal Code <br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={4} md={4} sm={12}>
                                <Typography variant="h6">
                                    State <br/>
                                    <span style={{color: "grey"}}>Muuyuyu</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Container>
    );
}

export default Confirm;