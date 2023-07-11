import React from "react";
import Navbar from "./components/Navbar";
//import Hero from "./components/Hero";
import Card from "./components/Card";
import katie from "./images/Katie-Zaferes.jpeg"

export default function App(){

    /*
        Challenge: Build the Navbar component

        Challenge : Pass props to the Card Component and display the data
            - img("katie.img")
            - rating ("5.0")
            - reviewCount(6)
            - country(any)
            - title ("Life Lessons with katie")
            - price (136)
    */
    return(
        <div className="container">
            <Navbar/>
            <Card
                img={katie}
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
            {/* <Hero/> */}
        </div>
        
    )
}