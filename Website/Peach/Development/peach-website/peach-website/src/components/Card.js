import React from 'react'

export default function Card(props){
    return (
        <div className='card__border'>
            <div className='img-holder'>
                <img src={props.location} alt='img' style={{ objectPosition: props.objectPosition, objectFit: props.objectFit }}/>
            </div>
            <p>{props.name ? props.name : ''}</p>
        </div>
    )
}
