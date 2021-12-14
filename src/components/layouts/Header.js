import React from 'react';
import {AppBar, Link, Toolbar, Typography} from "@mui/material";

function Header(props) {
    return (
        <div>
            <AppBar color={"primary"} position={"fixed"}>
                <Toolbar sx={{ padding : "10px" }}>
                    <Typography variant={"h5"}>
                        <Link sx={{ color : "white", textDecoration : "none" }}>
                            LOAN APP
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;