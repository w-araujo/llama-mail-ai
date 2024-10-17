import { HealthCheckService } from "../services/HealthCheckService";

describe("HealthCheckService", () => {
  let healthCheckService: HealthCheckService;

  beforeEach(() => {
    healthCheckService = new HealthCheckService();
  });

  it("should return Ok", async () => {
    const result = await healthCheckService.healthCheck();
    expect(result).toBe("Ok");
  });
});
