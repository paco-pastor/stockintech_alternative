import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/nouveau_departement', {
        nom: inputValue
      });

      console.log('Nouveau département créé avec succès', response.data);
    } catch (error) {
      console.error('Erreur lors de la création du département :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Champ de texte :
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default MyForm;
