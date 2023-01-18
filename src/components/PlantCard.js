import React, { useState } from "react";

function PlantCard({id, name, image, price, onDeleteId}) {
  
  const [ identifier, setIdentifier ] = useState(true)

  function handleOnClick() {
    setIdentifier(identifier => !identifier);
  }

  function handleDelete(id) {
    const config = {
      method: "DELETE"
    }
    fetch(`http://localhost:6001/plants/${id}`, config);
    onDeleteId(id);
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
      <button className="delete" onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
