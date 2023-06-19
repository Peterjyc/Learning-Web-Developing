import React from 'react'
import Flavour from './components/Flavour.js'
import Card from './components/Card.js'

export default function Flavours() {
    const flavours = Flavour.map(flavour => {
        return (
            <Card id ={flavour.id} location={flavour.location}/>
        )
    })
    return (
            <div className='flavour-container'>
                <h3 className='flavour-title'>Flavours</h3>
                <div className="flavours">
                    {flavours}
                </div>
            </div>
    )
}
