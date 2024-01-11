import React, { useState, useEffect } from "react";
import axios from "axios";

import FormAjout from "./FormAjout";

const ListDeparts = () => {
  const [departements, setDepartements] = useState([]);

  useEffect(() => {
    const fetchDepartements = async () => {
      try {
        const response = await axios.get("http://localhost:8000/departements");
        setDepartements(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des départements :",
          error
        );
      }
    };

    fetchDepartements();
  }, []);

  return (
    <div>
      <FormAjout />
      <h2>Liste des Départements</h2>
      <ul>
        {departements.map((departement) => (
          <li>
            {departement.code}. {departement.nom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDeparts;
