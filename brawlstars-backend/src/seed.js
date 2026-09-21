// Script para popular o banco com alguns exemplos de skins do Brawl Stars.
// Execute com: npm run seed
// (garanta que o MONGODB_URI no .env já está configurado)

require("dotenv").config();
const mongoose = require("mongoose");
const Skin = require("./models/Skin");

const skinsExemplo = [
  { nome: "Shark Leon", brawler: "Leon", raridade: "Épica", preco: 149 },
  { nome: "Classic Shelly", brawler: "Shelly", raridade: "Rara", preco: 29 },
  { nome: "R.T. El Primo", brawler: "El Primo", raridade: "Épica", preco: 149 },
  { nome: "Grand Prix Brock", brawler: "Brock", raridade: "Super Rara", preco: 79 },
  { nome: "Dark Note Colette", brawler: "Colette", raridade: "Mítica", preco: 149 },
  { nome: "Ninja Mortis", brawler: "Mortis", raridade: "Super Rara", preco: 79 },
  { nome: "Cyborg Jessie", brawler: "Jessie", raridade: "Rara", preco: 29 },
  { nome: "Mecha Paladin Surge", brawler: "Surge", raridade: "Épica", preco: 149 },
  { nome: "Dragon Knight Mortis", brawler: "Mortis", raridade: "Lendária", preco: 349 },
  { nome: "Chroma Edgar", brawler: "Edgar", raridade: "Cromada", preco: 49 }
];

async function seed() {
  const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/crud_skins_brawlstars";

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Conectado ao MongoDB, inserindo skins de exemplo...");

    await Skin.deleteMany({});
    await Skin.insertMany(skinsExemplo);

    console.log(`${skinsExemplo.length} skins inseridas com sucesso.`);
  } catch (error) {
    console.error("Erro ao popular o banco:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
