import React, { useState, useEffect } from "react";
import axios from "axios";

import FormAjout from "./FormAjout";

const ListDeparts = () => {
  const [departements, setDepartements] = useState([]);

  const fetchDepartements = async () => {
    try {
      const response = await axios.get("http://localhost:8000/departements");
      setDepartements(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des départements :", error);
    }
  };

  const handleDelete = async (code) => {
    try {
      await axios.post('http://localhost:8000/supprimer_departement/', {
        code: code
      });
      fetchDepartements(); // maybe
    } catch (error) {
      console.error('Erreur lors de la suppression du département :', error);
    }
  };

  useEffect(() => {
    fetchDepartements();
  }, []);

  return (
    <div>
      <h2>Liste des Départements</h2>
      <FormAjout fetchDepartements={fetchDepartements} />
      <ul>
        {departements.map((departement) => (
          <li key={departement.code}>
            {departement.code}. {departement.nom}
            <button className="listButton" onClick={() => handleDelete(departement.code)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDeparts;
