import {Box, CssBaseline, Grid} from "@mui/material";

import "../styles/app.css"

function Layout ({children}) {
    const [header, menu, branding]= children

    return (
        <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container sx={{flexGrow:1}}>
                <Grid item flexBasis={57}>{menu}</Grid>
                <Grid item flex={1}>
                    <Grid xs={12} m={2}>{header}</Grid>
                    <Grid xs={12} m={3}>{branding}</Grid>
                    <Grid container>
                        <Grid xs={3}>PKI</Grid>
                        <Grid xs={3}>PKI</Grid>
                        <Grid xs={3}>PKI</Grid>
                        <Grid xs={3}>PKI</Grid>
                    </Grid> 
                    <Grid container>
                        <Grid xs={4}>CONTAINER 1</Grid>
                        <Grid xs={4}>COTAINER 2</Grid>
                        <Grid xs={4}>COTAINER 3</Grid>
                    </Grid> 
                </Grid>
            </Grid>
        </Box>
    );
}

export default Layout;  