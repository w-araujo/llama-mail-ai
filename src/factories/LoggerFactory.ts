import { IEmail } from "../interfaces/email";
import { ILoggerFactory } from "../interfaces/Logger";
import { Log } from "../database/schema";

class LoggerFactory implements ILoggerFactory {
  async createLogEmailSender({
    from,
    to,
    subject,
    text,
    html,
  }: IEmail): Promise<void> {
    try {
      const log = new Log({ from, to, subject, text, html });
      await log.save();
    } catch (error) {
      console.error("Error logging email details: ", (error as Error).message);
    }
  }
}

export { LoggerFactory };
