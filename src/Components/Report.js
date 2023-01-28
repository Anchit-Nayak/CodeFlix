import React from "react";
import { AppBar, Button, Tabs, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Report =() =>{
    let navigate = useNavigate()
    return(
        <React.Fragment>
            <AppBar sx={{backgroundColor:"#bd0808"}}>
                <Toolbar>
                    <Typography sx={{fontFamily:'VT323, monospace',fontSize:"50px"}}>Annual Report</Typography>
                    <Tabs sx={{marginLeft:"auto"}}>
                        <Button sx={{fontFamily:'VT323, monospace', fontSize:"30px",color:"inherit"}} onClick={()=> {navigate("/")}}>Inventory</Button>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )

}

export default Report;