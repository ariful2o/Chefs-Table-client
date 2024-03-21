import React, { useEffect, useState } from "react";
import Card from "../card/Card";

export default function Cards({ handleCookTiem }) {
  const [cards, setCards] = useState([]);
  // console.log(cards)
  useEffect(() => {
    fetch("../../../public/resepe.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-4 w-full lg:w-4/6">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            handleCookTiem={handleCookTiem}
          ></Card>
        );
      })}
    </div>
  );
}
