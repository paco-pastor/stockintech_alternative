const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());

mongoose.connect("mongodb://localhost:27017/stockintech_alternative", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erreur de connexion à MongoDB :"));
db.once("open", () => {
  console.log("Connecté à MongoDB");
});

const departementSchema = new mongoose.Schema({
  code: Number,
  nom: String,
});
const Departement = mongoose.model("Departement", departementSchema);

app.get("/departements", async (req, res) => {
  try {
    const departements = await Departement.find({});
    res.json(departements);
  } catch (error) {
    console.error("Erreur lors de la récupération des départements :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.post("/nouveau_departement", async (req, res) => {
  try {
    console.log(req.body);
    const { nom } = req.body;

    // Récupération du code le plus élevé
    const departementMaxCode = await Departement.findOne().sort("-code");

    // Calcul du nouveau code du département
    const nouveauCode = departementMaxCode ? departementMaxCode.code + 1 : 1;

    // Création d'une nouvelle instance du modèle Departement
    const nouveauDepartement = new Departement({ code: nouveauCode, nom });

    // Sauvegarde du nouveau département dans la base de données
    await nouveauDepartement.save();

    res
      .status(201)
      .json({ message: "Nouveau département créé avec succès", nouveauCode });
  } catch (error) {
    console.error("Erreur lors de la création du département :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});
