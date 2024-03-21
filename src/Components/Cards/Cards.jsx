import React, { useEffect, useState } from 'react'
import Card from '../card/Card'

export default function Cards() {
    const [cards,setCards]=useState([])
    // console.log(cards)
    useEffect(()=>{
        fetch('../../../public/resepe.json')
     .then(res=>res.json())
     .then(data=>setCards(data))
    },[])
  return (
    <div>
      {
        cards.map((card)=>{
            return <Card key={card.id} card={card}></Card>
        })
      }
    </div>
  )
}
