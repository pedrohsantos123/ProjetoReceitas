require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB conectado"))
.catch((error) => console.log("Erro ao conectar ao MongoDB:", error));

// Rotas
app.use("/api/recipes", recipeRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
