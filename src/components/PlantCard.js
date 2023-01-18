import React, { useState } from "react";

function PlantCard({name, image, price}) {
  
  const [ identifier, setIdentifier ] = useState(true)

  function handleOnClick() {
    setIdentifier(identifier => !identifier);
  }

  return (
    <li className="card">
      <img src={image ? image : "https://via.placeholder.com/400"} alt={{name}} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {identifier ? (
        <button className="primary" onClick={handleOnClick}>In Stock</button>
      ) : (
        <button onClick={handleOnClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
