const express = require("express");
const { createRecipe, getRecipes } = require("../controllers/recipeController");
const verifyToken = require("../middlewares/auth");

const router = express.Router();

router.post("/", verifyToken, createRecipe); // Rota protegida
router.get("/", getRecipes);

module.exports = router;
