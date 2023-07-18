import React from "react";

export default function Card(props){
    return(
       <div className="card">
       <div className="card--badge">SOLD OUT</div>
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