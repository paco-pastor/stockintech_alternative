import React, { useState } from 'react';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Effectue l'action de soumission ici (ex: envoi à un serveur, etc.)
    console.log('Formulaire soumis avec la valeur :', inputValue);
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
