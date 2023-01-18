import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const baseUrl = "http://localhost:6001/plants";

  const [plants, setPlants] = useState([]);
  const [searchPlants, setSearchPlants] = useState("");

  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(plantObj => setPlants(plantObj))
  }, [])

  function onFormSubmit(plantObj) {
    setPlants([...plants, plantObj])
  }

  const plantsToDisplay = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchPlants.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit} />
      <Search searchPlants={searchPlants} onSearchPlants={setSearchPlants} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
