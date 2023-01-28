import React from "react";
import "./InventoryCard.css"
import { Button, Toolbar } from "@mui/material";

const InventoryCard =(props) =>{
   return <div className="card-container">
   <div className="image-container">
     <img src={props.imageURL}/>
   </div>
   <div className="card-name">
     <h1>{props.name}</h1>
   </div>
   <div className="card-description">
     <h2>{props.description}</h2>

   </div>
   <div className="card-quantity">
     <h3>Quantity:{props.quantity}</h3>

   </div>
   <div className="last-updated">
     <h4>Last-Updated:{props.updated}</h4>
   </div>
   <Toolbar>
   <div className="import">
   <Button variant="text" size="small" sx={{fontFamily:'VT323, monospace',fontSize:"20px",color:"white",border:"solid white 3px",padding:"0px 3px"}}>Import</Button>
 
   </div>
   <div className="export">
   <Button variant="text" size="small" sx={{fontFamily:'VT323, monospace',fontSize:"20px",color:"white",border:"solid white 3px",padding:"0px 3px",marginLeft:"100px"}}>Export</Button>

   </div>
   </Toolbar>
   
   </div>
}

export default InventoryCard;