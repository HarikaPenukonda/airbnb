import React from "react";
import Navbar from "./components/Navbar";
//import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App(){

    /*
        Challenge: Build the Navbar component
    */
    return(
        <div className="container">
            <Navbar/>
            <Card/>
            {/* <Hero/> */}
        </div>
        
    )
}