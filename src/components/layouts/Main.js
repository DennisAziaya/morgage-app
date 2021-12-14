import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {makeStyles} from "@mui/styles";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
    bodyContainer: {
        //margin: "8rem 10rem 0 10rem",
        marginTop : "2rem",
        // marginBottom : "1rem",
        height: "70vh",
        padding : "1rem"
    },
    header: {
        // marginBottom : "50px"
        //     height : "100vh"
    },

    footer: {
       //marginBottom : "2rem"
        position : "absolute",
        //textAlign : "center",
        bottom : "2rem",
        left : "50%",
        transform : "translate(-50%)"

    }
}));


function Main({children}) {

    const classes = useStyles();

    return (
        <Container component="main">
            {/*<Header className={classes.header}/>*/}
            <div className={classes.bodyContainer}>
                {children}
            </div>
            <Footer className={classes.footer}/>
        </Container>
    );
}

export default Main;