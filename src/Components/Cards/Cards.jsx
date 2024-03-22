import React, { useEffect, useState } from "react";
import Card from "../card/Card";

export default function Cards({ handleCookTiem }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("../../../public/resepe.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSelect = (id) => {
    const updatedCards = cards.map(card =>
      card.recipe_id === id ? { ...card, selected: !card.selected } : card
    );
    setCards(updatedCards);
    handleCookTiem(updatedCards.find(card => card.recipe_id === id));
  };
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-4 w-full lg:w-4/6">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            handleCookTiem={handleCookTiem}
            handleSelect={handleSelect}
          ></Card>
        );
      })}
    </div>
  );
}

