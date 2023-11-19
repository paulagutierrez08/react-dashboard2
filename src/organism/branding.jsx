import React from "react";

import {Paper, Grid } from "@mui/material";

const ICON_STYLES = {bgcolor: "#3730A2"};
const ICON_COLOR ={color:"white"}

function Branding (){
    return (
            <Paper sx={ICON_STYLES}>
                <Grid sx={ICON_COLOR} p={1}>
                    <h2> Champions League</h2>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et quis ab nemo soluta incidunt odio quod repellendus id rem nostrum similique mollitia maxime</h6>
                </Grid>
            </Paper>
    );
}

export default Branding;