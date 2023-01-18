import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const plantsList = plants.map(plant => {
    return (
      <PlantCard key={plant.id} {...plant} />
    )
  })

  return (
    <ul className="cards">{plantsList}</ul>
  );
}

export default PlantList;
