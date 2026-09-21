const Skin = require("../models/Skin");

async function listarSkins(req, res) {
  try {
    const skins = await Skin.find();
    res.json(skins);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarSkin(req, res) {
  try {
    const skin = await Skin.findById(req.params.id);

    if (!skin) {
      return res.status(404).json({ mensagem: "Skin não encontrada" });
    }

    res.json(skin);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function criarSkin(req, res) {
  try {
    const skin = await Skin.create(req.body);
    res.status(201).json(skin);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarSkin(req, res) {
  try {
    const skin = await Skin.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!skin) {
      return res.status(404).json({ mensagem: "Skin não encontrada" });
    }

    res.json(skin);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirSkin(req, res) {
  try {
    const skin = await Skin.findByIdAndDelete(req.params.id);

    if (!skin) {
      return res.status(404).json({ mensagem: "Skin não encontrada" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarSkins,
  buscarSkin,
  criarSkin,
  atualizarSkin,
  excluirSkin
};
