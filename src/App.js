import React from "react";
import Navbar from "./components/Navbar";
//import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App(){

     const dataElements = data.map((items)=>{
        return <Card
            key={items.id}
            items={items}
        />
     })
    return(
        <div>
            <Navbar/>
            <section className="cards--list">
                {dataElements}
            </section>
            
            {/* <Hero/> */}
        </div>
        
    )
}