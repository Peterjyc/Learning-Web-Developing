import React from 'react'

export default function Card(props){
    return (
        <div className='card__border'>
            <img src={props.location} />
        </div>
    )
}
