import { Request, Response } from "express";
import { IHealthCheckService } from "../interfaces/healthCheck";

class HealthCheckController {
  constructor(private readonly healthCheckService: IHealthCheckService) {}

  async healthCheck(req: Request, res: Response): Promise<Response> {
    try {
      const message = await this.healthCheckService.healthCheck();
      return res.status(200).json({ msg: message });
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export { HealthCheckController };
