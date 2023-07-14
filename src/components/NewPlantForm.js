import React, { useState } from "react";

function NewPlantForm({onFormSubmit}) {

  const initialForm = {
    name: "",
    image: "",
    price: ""
  }

  const [ formData, setFormData ] = useState(initialForm)

  function handleFormInput(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
    // original
    const newFormData = {...formData, price: Number(formData.price)}
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFormData)
    }
    fetch(`http://localhost:6001/plants`, config)
    .then(res => res.json())
    .then(plantObj => onFormSubmit(plantObj))

    // refactoring attempt
    // onFormSubmit(formData)

    setFormData(initialForm);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          value={formData.name}
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={handleFormInput}
        />
        <input
          value={formData.image}
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleFormInput}
        />
        <input
          value={formData.price}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={handleFormInput}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
