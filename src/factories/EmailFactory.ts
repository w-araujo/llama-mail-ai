import { IEmailFactory } from "../interfaces/email";
import { Email } from "../models/Email";

class EmailFactory implements IEmailFactory {
  createEmail(
    from: string,
    to: string[],
    subject: string,
    text: string,
    html: string
  ): Email {
    return new Email(from, to, subject, text, html);
  }
}

export { EmailFactory };
