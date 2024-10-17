import { IEmail } from "./email";

interface ILoggerFactory {
  createLogEmailSender(email: IEmail): Promise<void>;
}
