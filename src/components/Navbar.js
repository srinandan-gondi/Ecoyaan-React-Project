import { useEffect, useState } from "react";
import "../App.css";

export default function Navbar(){

    

    return (
        <div className="Navbar" >
            <a href="/" id="logo" style={{fontSize:'50px', fontFamily:'Times New Roman'}}>Ecoyaan</a>
            <br></br>
            
            <a href="/">Home</a>
            <br></br>
            <a href="/aboutus">About Us</a>
            <br></br>
            <a>Sell on Ecoyaan</a>
            <br></br>
            <a>Careers</a>
        </div>
    );
}
