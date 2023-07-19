import React from "react";


export default function Hero(){
    return(
        <section className="Hero">
            <img src="images/airbnbexp.png"
                alt="experiences"
                className="hero-photo"
            />
            <h1 className="hero--header"> Online Experiences</h1>
            <p className="hero--text"> Join unique interactive activties led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}