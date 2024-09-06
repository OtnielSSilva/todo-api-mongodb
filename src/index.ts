import express from "express";
import morgan from "morgan";
import connectDB from "./config/db";
import todoRoutes from "./routes/todos";
import "dotenv/config";

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Rotas
app.use("/api", todoRoutes);

const { PORT } = process.env || 5000;

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
