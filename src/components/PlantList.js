import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeleteId }) {

  const plantsList = plants.map(plant => {
    return (
      <PlantCard key={plant.id} {...plant} onDeleteId={onDeleteId} />
    )
  })

  return (
    <ul className="cards">{plantsList}</ul>
  );
}

export default PlantList;
