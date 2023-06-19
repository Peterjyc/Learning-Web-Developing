import React from 'react'
import Cakes from './components/Cakes.js'
import Card from './components/Card.js'

export default function Menu() {
  const cards = Cakes.map(cake => {
    return (
        <Card id={cake.id} location={cake.location}/>
    )
  })
    return (
        <div className='menu'>
            <h3 className='menu-title'>Recent orders</h3>
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}
