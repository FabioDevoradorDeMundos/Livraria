import express  from "express";
import EditoraController from "../controlers/EditoraController.js";


const router = express.Router();

router
.get("/editora",EditoraController.listarEditora)
.get("/editora/:id",EditoraController.listarEditoraPorId)
.post("/editora",EditoraController.cadastrarEditora)
.put("/editora/:id",EditoraController.atualizarEditora)
.delete("/editora/:id",EditoraController.excluirEditora)

export default router;