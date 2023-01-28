import React from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
    return (
        <React.Fragment>
        <AppBar>
        <Toolbar>
            <Typography>Inventory</Typography>
            <Tabs sx={{marginLeft:'auto'}}>
             <Tab label="Report" sx={{color:"inherit"}}/>
             <Button href="#text-buttons">Link</Button>
            </Tabs>
            
        </Toolbar>
        </AppBar>      
        </React.Fragment>
    )
}

export default NavBar;