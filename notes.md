# Components Tree

App
  -> Header

  -> PlantPage
    - useEffect to fetch db.json data
    - plant state here
    - form submit handler here
    - search state, search setter function here

    -> NewPlantForm (pass in form submit handler)
      - form data here
      - onChange form handler here

    -> Search (pass search state, search setter function)
      - search handler here

    -> PlantList (pass in plant state)
      - .map here to render all plants

      -> PlantCard (pass in destructured plant state)
        - use plant prop here

# Data Shape

{
  "plants": [
    {
      "id": 1,
      "name": "Aloe",
      "image": "./images/aloe.jpg",
      "price": 15.99
    },

