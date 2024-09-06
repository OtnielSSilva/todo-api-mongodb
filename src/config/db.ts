import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
	const { MONGO_URL } = process.env;

	if (!MONGO_URL) {
		console.error("Erro: A variável de ambiente MONGO_URL não está definida.");
		process.exit(1);
	}

	try {
		if (!MONGO_URL) {
			throw Error("Ausência da  MONGO_URL");
		}
		const conn = await mongoose.connect(MONGO_URL);
		console.log(`MongoDB conectado: ${conn.connection.host}`);
	} catch (error) {
		// Resolve: 'error' is of type 'unknown'
		if (error instanceof Error) {
			console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
		} else {
			console.error("Erro desconhecido ao conectar ao MongoDB:", error);
		}
		process.exit(1);
	}
};

export default connectDB;
