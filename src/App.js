import React from "react";
import Navbar from "./components/Navbar";
//import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App(){

     const dataElements = data.map((items)=>{
        return <Card
            img={items.coverImg}
            rating={items.stats.rating}
            reviewCount={items.stats.reviewCount}
            country={items.location}
            title={items.title}
            price={items.price}
        />
     })

    /*
        Challenge :
        - import the array of data from data.js
        - map over the array to create <Card/> components
        - display the array of card components under the Navbar
    */
    return(
        <div className="container">
            <Navbar/>
            {dataElements}
            {/* <Hero/> */}
        </div>
        
    )
}