const express = require("express");
const skinController = require("../controllers/skinController");

const router = express.Router();

router.get("/", skinController.listarSkins);
router.get("/:id", skinController.buscarSkin);
router.post("/", skinController.criarSkin);
router.put("/:id", skinController.atualizarSkin);
router.delete("/:id", skinController.excluirSkin);

module.exports = router;
