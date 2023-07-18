import React from "react";

export default function Card(props){
    let badgeText
    if(props.items.openSpots === 0){
        badgeText = "SOLD OUT"   
    } else if (props.items.location === "Online"){
        badgeText = "ONLINE"
    }
    /*
        Challenge: Fix our component
    */
    return(
       <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.items.coverImg}
            alt="katie-zaferes"
            className="card--image" 
            />
            <div className="card--stats">
                <img src="images/star.png"
                    alt="star-rating"
                    className="card--star"
                />
                <span>{props.items.stats.rating}</span>
                <span className="grey">({props.items.stats.reviewCount}) . </span>
                <span className="grey"> {props.items.location}</span>
            </div>
            <p className="card--title">{props.items.title}</p>
            <p className="card--price"><span className="bold">From ${props.items.price} / person</span></p>
       </div>
    )
}