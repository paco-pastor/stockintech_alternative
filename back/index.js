const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/stockintech_alternative", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erreur de connexion à MongoDB :"));

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
    const { nom } = req.body;

    const departementMaxCode = await Departement.findOne().sort("-code");
    const nouveauCode = departementMaxCode ? departementMaxCode.code + 1 : 1;

    const nouveauDepartement = new Departement({ code: nouveauCode, nom });

    await nouveauDepartement.save();

    res
      .status(201)
      .json({ message: "Nouveau département créé avec succès", nouveauCode });
  } catch (error) {
    console.error("Erreur lors de la création du département :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.post("/supprimer_departement", async (req, res) => {

  try {
    const codeDepartement = req.body.code;
    await Departement.findOneAndDelete({ code: codeDepartement });

    res.status(200).json({ message: "Département supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du département :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});
