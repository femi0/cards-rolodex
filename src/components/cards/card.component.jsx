import React from "react";

import './card.styles.css'

export const Card = props => (

    <div className ='card-container'>
        <img alt="course" src={'https://robohash.org/${props.course.id}?set=set2&size=180x180'}/>
         <h2>{props.course.name}</h2>
         <p>{props.course.email}</p>
    </div>
)