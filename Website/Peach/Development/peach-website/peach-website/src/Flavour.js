import React from 'react'
import FlavourList from './components/FlavourList.js'
import Card from './components/Card.js'

export default function Flavours() {
    const flavours = FlavourList.map(flavour => {
        return (
                <Card id ={flavour.id} location={flavour.location} name={flavour.name} objectPosition={flavour.objectPosition} objectFit={flavour.objectFit}/>
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
