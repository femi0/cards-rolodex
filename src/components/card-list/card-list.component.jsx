import React from 'react';

import { Card } from '../cards/card.component';

import './card-list.styles.css';

export const CardList = props => {
    console.log(props);
    return <div className='card-list'>
        {props.courses.map(course => (
        <Card key={course.id} course ={ course }/> ))
        }
    </div>;
} 