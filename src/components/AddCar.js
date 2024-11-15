import React, { useState } from 'react';
import { createCar } from '../services/api';

const AddCar = ({ token }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    images: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carData = {
      title: formData.title,
      description: formData.description,
      tags: formData.tags.split(','),
      images: formData.images.split(','),
    };

    try {
      const newCar = await createCar(carData, token);
      alert('Car added successfully!');
      setFormData({ title: '', description: '', tags: '', images: '' });  // Clear form after submission
    } catch (error) {
      console.error('Error adding car', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Car</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Tags (comma separated):
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Images (comma separated):
        <input
          type="text"
          name="images"
          value={formData.images}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;
