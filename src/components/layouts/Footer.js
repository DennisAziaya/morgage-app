import React from 'react';
import {Link, Typography} from "@mui/material";

function Footer(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link sx={{ textDecoration : "none" }} color="inherit" href="#">
                Loan App
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer;