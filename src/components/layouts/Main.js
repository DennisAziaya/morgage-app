import React from 'react';
import {makeStyles} from "@mui/styles";
import {Container} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    bodyContainer: {
        marginTop : "2rem",
        height: "70vh",
        padding : "1rem"
    },

}));


function Main({children}) {

    const classes = useStyles();

    return (
        <Container component="main">
            <div className={classes.bodyContainer}>
                {children}
            </div>
        </Container>
    );
}

export default Main;