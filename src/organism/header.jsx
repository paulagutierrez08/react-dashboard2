import React from "react";

import {Paper, IconButton, Grid, Box, InputBase } from "@mui/material";
import {AccountCircleOutlined, NotificationsNoneOutlined, SearchOutlined} from "@mui/icons-material"

const ICON_STYLES = {color: "#9CA3AF"};

function Header({search, onSearch}){
    return (
        <Paper elevation={0}>
            <Grid container sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Box>
                    <IconButton type="button" sx={{p:"10px"}} aria-label="search">
                        <SearchOutlined/>
                    </IconButton>
                    <InputBase 
                        sx={{ml:1, flex:1}} placeholder="Search here" value={search} onChange={onSearch}
                    />
                </Box>
                <Grid item>
                    <IconButton>
                        <AccountCircleOutlined sx={ICON_STYLES}/>
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneOutlined sx={ICON_STYLES}/>
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Header;
