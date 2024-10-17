import { IHealthCheckService } from "interfaces/healthCheck";

class HealthCheckService implements IHealthCheckService {
  async healthCheck(): Promise<string> {
    const text = "Ok";
    return text;
  }
}

export { HealthCheckService };
