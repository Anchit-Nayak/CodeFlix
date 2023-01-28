import React from "react";
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from "../pages/supabaseClient"; 
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../pages/login";
import Account from "../pages/account";

import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";


const NavBar = () => {
    let navigate = useNavigate()
    const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

    return (
        <React.Fragment>
        <AppBar sx={{backgroundColor:"#bd0808"}}>
        <Toolbar>
            <Typography sx={{fontFamily:'VT323, monospace', fontSize:"50px",marginLeft:"60px"}}>Inventory</Typography>
            <Tabs sx={{marginLeft:'auto'}}>
             <Button sx={{fontFamily:'VT323, monospace', fontSize:"30px",color:"inherit"}} onClick={()=>{navigate("/report")}}>Report</Button>
            </Tabs>
            <Button sx={{fontFamily:'VT323, monospace', fontSize:"30px",marginRight:"40px",color:"inherit"}}
            variant="text" className="button block" onClick={() => supabase.auth.signOut()}>
        SignOut
      </Button>
        </Toolbar>
        </AppBar>      
        </React.Fragment>
    )
}

export default NavBar;