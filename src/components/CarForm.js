import React, { useState } from 'react';

function CarForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { name, description, price };
    // Handle form submission (e.g., API call to add car)
    console.log(newCar);
  };

  return (
    <div className="car-form">
      <h1>Add a New Car</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Car Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Car Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Car Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default CarForm;
