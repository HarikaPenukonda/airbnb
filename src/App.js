import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App(){

    /*
        Challenge: Build the Navbar component
    */
    return(
        <div className="container">
            <Navbar/>
            <Hero/>
        </div>
        
    )
}