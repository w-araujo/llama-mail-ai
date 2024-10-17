import express from "express";
import "dotenv/config";
import { routes } from "./routes/index";
import { mongoConnect } from "./database/mongoConnect";
import rateLimit from "express-rate-limit";
import cors from "cors";

const app = express();

const limiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutos
  max: 50, // Limite de 50 requisições
  message:
    "Você excedeu o limite de requisições. Tente novamente em 30 minutos.",
  statusCode: 429,
  standardHeaders: true,
  legacyHeaders: false,
});

async function serverStart() {
  await mongoConnect();

  app.use(cors());
  app.use(limiter);
  app.use(express.json());
  app.use(routes);

  app.listen(process.env.API_PORT, () =>
    console.log(`Server running on port: ${process.env.API_PORT}`)
  );
}

serverStart().catch((error) => {
  console.error("Failed to start server", error);
});
