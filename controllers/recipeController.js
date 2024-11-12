const Recipe = require("../models/Recipe");

exports.createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const userId = req.user.uid; // Firebase UID do usuário autenticado

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      userId,
    });

    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar receita" });
  }
};

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar receitas" });
  }
};

// Outras funções para update e delete...
