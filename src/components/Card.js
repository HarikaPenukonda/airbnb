import React from "react";
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


export default function Card(props){
    return(
       <div className="card">
            <img src={props.img}
            alt="katie-zaferes"
            className="card--image" 
            />
            <div className="class--stats">
                <img src={star}
                    alt="star-rating"
                    className="card--star"
                />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) . </span>
                <span className="grey"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} / person</span></p>
       </div>
    )
}