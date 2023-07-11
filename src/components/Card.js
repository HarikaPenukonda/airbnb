import React from "react";
import katie from "../images/Katie-Zaferes.jpeg"
import star from "../images/star.png"

/*
    Challenge: Build the Card Component
    For Now, hard-code in the data (like the rating, title, price etc)

    Notes:

    - Only render 1 instance 
    - The star icon and photo are in the images
    - Make sure to include :
        - image
        - star icon, rating, and review count
        - title
        - cost/person

    - The main purpose of this challenge is to show you where our limitations currently are


*/


export default function Card(){
    return(
       <div className="card">
            <img src={katie}
            alt="katie-zaferes"
            className="card--image" 
            />
            <div className="class--stats">
                <img src={star}
                    alt="star-rating"
                    className="card--star"
                />
                <span>5.0</span>
                <span className="grey">(6) . </span>
                <span className="grey"> USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 / person</span></p>
       </div>
    )
}