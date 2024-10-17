import { Router } from "express";
import { HealthCheckService } from "../services/HealthCheckService";
import { HealthCheckController } from "../controllers/HealthCheckController";

const healthCheckService = new HealthCheckService();
const healthCheckController = new HealthCheckController(healthCheckService);
const healthCheckRouter = Router();

// @ts-ignore
healthCheckRouter.get("/", (req, res) =>
  healthCheckController.healthCheck(req, res)
);

export { healthCheckRouter };
