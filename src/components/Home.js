import React, {useState} from 'react';
import {makeStyles} from "@mui/styles";
import {Box, Container, Step, StepLabel, Stepper, Typography} from "@mui/material";
import Main from "./layouts/Main";
import SignUp from "./steps/SignUp";
import PersonalDetails from "./steps/PersonalDetails";
import Confirm from "./steps/Confirm";
import MortgagePlan from "./steps/Plan";

const useStyles = makeStyles((theme) => ({
    root: {
        padding : "2rem",
        "&& .MuiStepIcon-root.Mui-active" : {
            color : "orange"
}
    },
    headerContainer: {
        margin: "2rem 0",
        textAlign: "center"
    },
    bodyArea: {
        margin: "1rem 0",
        padding: "1rem 0",
    },
    buttonArea: {
        margin: "1rem 0"
    }
}))


const Home = (props) => {


    const [activeStep, setActiveStep] = useState(0)

    //Handel Next Step
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    const getSteps = () => {


        return ["SIGN UP", "MORTGAGE", "PERSONAL DETAILS", "CONFIRM"]
    }

    const getStepsContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <SignUp activeStep={activeStep} steps={steps} handleNext={handleNext}/>
            case 1:
                return <MortgagePlan activeStep={activeStep} steps={steps} handleNext={handleNext}/>
            case 2:
                return <PersonalDetails activeStep={activeStep} steps={steps} handleNext={handleNext}/>
            case 3:
                return <Confirm activeStep={activeStep} steps={steps} handleNext={handleNext}/>
            default:
                return "Finnish"

        }
    }

    const classes = useStyles();
    const steps = getSteps();


    return (
        <Main>
            <Container className={classes.headerContainer}>
                <Typography variant={"h4"}>
                    Loan Application
                </Typography>
                <Typography sx={{margin: "1rem 0"}} variant={"p"}>
                    To get started please sign up, fill in the detail and submit your application
                </Typography>
            </Container>
            <Box>
                <Stepper className={classes.root} alternativeLabel activeStep={activeStep}>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Container>
                    <Box className={classes.bodyArea}>
                        <div>
                            {getStepsContent(activeStep)}
                        </div>
                        {/*<Divider sx={{ marginTop: "2rem", marginBottom : "5rem"}}>*/}
                        {/*    {activeStep === steps.length ? "The Steps" : (*/}
                        {/*        <Button sx={{ borderRadius : "50%", backgroundColor: "orange" }} variant={"contained"} onClick={handleNext}>*/}
                        {/*            {activeStep === steps.length ? "Finnish" : "Next"}*/}
                        {/*        </Button>*/}
                        {/*    )}*/}
                        {/*</Divider>*/}
                    </Box>
                </Container>
            </Box>
        </Main>
    );
}

export default Home;