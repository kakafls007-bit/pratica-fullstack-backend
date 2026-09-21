const mongoose = require("mongoose");

const skinSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    brawler: {
      type: String,
      required: true
    },
    raridade: {
      type: String,
      required: true,
      enum: ["Rara", "Super Rara", "Épica", "Mítica", "Lendária", "Cromada"]
    },
    preco: {
      type: Number
    },
    imagemUrl: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Skin", skinSchema);
