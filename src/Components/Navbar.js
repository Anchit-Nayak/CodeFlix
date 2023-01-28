import React from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
    return (
        <React.Fragment>
        <AppBar sx={{backgroundColor:"#bd0808"}}>
        <Toolbar>
            <Typography sx={{fontFamily:'VT323, monospace', fontSize:"50px",marginLeft:"60px"}}>Inventory</Typography>
            <Tabs sx={{marginLeft:'auto'}}>
             <Tab label="Report" sx={{fontFamily:'VT323, monospace', fontSize:"30px",color:"inherit"}}/>
            </Tabs>
            <Button variant="text" sx={{fontFamily:'VT323, monospace', fontSize:"30px",marginLeft:"20px", marginRight:"40px",color:"inherit"}}>SignOut</Button>
        </Toolbar>
        </AppBar>      
        </React.Fragment>
    )
}

export default NavBar;