interface IEmail {
  from: string;
  to: string[];
  subject: string;
  text: string;
  html: string;
}

interface IEmailFactory {
  createEmail(
    from: string,
    to: string[],
    subject: string,
    text: string,
    html: string
  ): IEmail;
}

interface IEmailService {
  sendEmail(email: IEmail): Promise<string>;
}

export { IEmail, IEmailFactory, IEmailService };
