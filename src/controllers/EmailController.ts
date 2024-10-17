import { IEmailService, IEmailFactory } from "interfaces/email";
import { ILoggerFactory } from "interfaces/Logger";
import { Request, Response } from "express";

class EmailController {
  constructor(
    private readonly emailService: IEmailService,
    private readonly emailFactory: IEmailFactory,
    private readonly loggerFactory: ILoggerFactory
  ) {}

  async sendEmail(req: Request, res: Response): Promise<Response> {
    try {
      const { from, to, subject, text, html } = req.body.email;
      const email = this.emailFactory.createEmail(
        from,
        to,
        subject,
        text,
        html
      );

      const messageId = await this.emailService.sendEmail(email);
      await this.loggerFactory.createLogEmailSender({
        from,
        to,
        subject,
        text,
        html,
      });
      return res
        .status(200)
        .json({ message: "Email sent successfully", messageId });
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export { EmailController };
