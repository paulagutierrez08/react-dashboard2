import React from "react";

import {Paper, Box } from "@mui/material";

const FONT_COLOR ={color:"white"}

function Branding (){
    return (
            <Paper className="branding">
                <Box sx={FONT_COLOR} p={1}>
                    <h2> Champions League</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam numquam similique fugiat quia molitia maxime</p>
                </Box>
            </Paper>
    );
}

export default Branding;