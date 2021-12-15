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
    const handleNext = (e) => {
        e.preventDefault();
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    //Handel Previous Step
    const handlePrevious = (e) => {
        e.preventDefault();
        setActiveStep(prevStep => prevStep - 1)
    }

    const getSteps = () => {


        return ["SIGN UP", "MORTGAGE", "PERSONAL DETAILS", "CONFIRM"]
    }

    const getStepsContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <SignUp activeStep={activeStep} steps={steps} handleNext={handleNext} />
            case 1:
                return <MortgagePlan activeStep={activeStep} steps={steps} handleNext={handleNext}  handlePrevious={handlePrevious}/>
            case 2:
                return <PersonalDetails activeStep={activeStep} steps={steps} handleNext={handleNext}  handlePrevious={handlePrevious}/>
            case 3:
                return <Confirm activeStep={activeStep} steps={steps} values handlePrevious={handlePrevious}/>
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
                <Stepper className={classes.root} alternativeLabel activeStep={activeStep} >
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
                    </Box>
                </Container>
            </Box>
        </Main>
    );
}

export default Home;