import React from "react";

export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"   
    } else if (props.country === "Online"){
        badgeText = "ONLINE"
    }
    /*
        Challenge:
        1. Display the correct text in the badge based on the logic above
        2. Only display the badge if badgeText has a value
    */
    return(
       <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img}
            alt="katie-zaferes"
            className="card--image" 
            />
            <div className="card--stats">
                <img src="images/star.png"
                    alt="star-rating"
                    className="card--star"
                />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) . </span>
                <span className="grey"> {props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price} / person</span></p>
       </div>
    )
}