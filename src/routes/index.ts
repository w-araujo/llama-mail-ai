import { Router } from "express";
import { emailRouter } from "./email.routes";
import { llama3Router } from "./llama3.routes";
import { healthCheckRouter } from "./healthCheck.routes";

const routes = Router();

routes.use("/email", emailRouter);
routes.use("/llama3", llama3Router);
routes.use("/healthCheck", healthCheckRouter);

export { routes };
