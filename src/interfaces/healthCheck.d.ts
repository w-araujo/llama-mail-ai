interface IHealthCheckService {
  healthCheck(): Promise<string>;
}

export { IHealthCheckService };
